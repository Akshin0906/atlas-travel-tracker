#!/usr/bin/env python3
"""Generate per-country city suggestions from the GeoNames cities500 dump."""

from __future__ import annotations

import argparse
import json
import re
import sys
import unicodedata
import urllib.request
import zipfile
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COUNTRIES_PATH = ROOT / "src" / "data" / "countries.ts"
OUTPUT_PATH = ROOT / "src" / "data" / "metroCities.ts"
CACHE_PATH = ROOT / ".cache" / "geonames" / "cities500.zip"
GEONAMES_URL = "https://download.geonames.org/export/dump/cities500.zip"

INCLUDED_FEATURE_CODES = {"PPL", "PPLA", "PPLA2", "PPLA3", "PPLA4", "PPLC"}
FEATURE_PRIORITY = {
    "PPLC": 60,
    "PPLA": 50,
    "PPLA2": 40,
    "PPLA3": 30,
    "PPLA4": 20,
    "PPL": 10,
}

DISTRICT_NAME_PATTERNS = [
    re.compile(pattern, re.IGNORECASE)
    for pattern in (
        r"\bcentral business district\b",
        r"\bcommune d'arrondissement\b",
        r"\barrondissement\b",
        r"\bborough\b",
        r"\bcounty\b",
        r"\bdelegation\b",
        r"\bdistrict\b",
        r"\bdistrito\b",
        r"\bmunicipality\b",
        r"\bprefecture\b",
        r"\bsubdistrict\b",
        r"\btownship\b",
        r"\bward\b",
        r"\bwoleswali\b",
        r"\bwoluswali\b",
        r"\bwuleswali\b",
        r"\bsector\s+\d+\b",
        r"\bzone\s+\d+\b",
    )
]

DISTRICT_ALTERNATE_PATTERNS = [
    re.compile(pattern, re.IGNORECASE)
    for pattern in (
        r"\barrondissement\b",
        r"\bborough\b",
    )
]


@dataclass(frozen=True)
class CityRow:
    name: str
    country_code: str
    feature_code: str
    population: int

    @property
    def sort_key(self) -> tuple[int, int, str]:
        return (-self.population, -FEATURE_PRIORITY[self.feature_code], self.name)

    @property
    def dedupe_score(self) -> tuple[int, int, str]:
        return (self.population, FEATURE_PRIORITY[self.feature_code], self.name)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source",
        type=Path,
        default=CACHE_PATH,
        help="Path to a GeoNames cities500.zip file. Downloaded if missing.",
    )
    parser.add_argument(
        "--refresh",
        action="store_true",
        help="Download a fresh GeoNames dump even when --source already exists.",
    )
    return parser.parse_args()


def load_country_codes() -> list[str]:
    text = COUNTRIES_PATH.read_text(encoding="utf-8")
    codes = re.findall(r'"iso2":"([A-Z]{2})"', text)
    seen: set[str] = set()
    ordered_codes: list[str] = []
    for code in codes:
        if code in seen:
            raise ValueError(f"Duplicate country code in countries.ts: {code}")
        seen.add(code)
        ordered_codes.append(code)
    if not ordered_codes:
        raise ValueError("No country codes found in countries.ts")
    return ordered_codes


def ensure_source(path: Path, refresh: bool) -> None:
    if path.exists() and not refresh:
        return

    path.parent.mkdir(parents=True, exist_ok=True)
    print(f"Downloading {GEONAMES_URL}", file=sys.stderr)
    with urllib.request.urlopen(GEONAMES_URL) as response, path.open("wb") as output:
        output.write(response.read())


def normalize_text(value: str) -> str:
    folded = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
    return re.sub(r"[^a-z0-9]+", " ", folded.lower()).strip()


def is_district_like_name(name: str) -> bool:
    return any(pattern.search(name) for pattern in DISTRICT_NAME_PATTERNS)


def has_district_like_alternate(alternate_names: str) -> bool:
    return any(pattern.search(alternate_names) for pattern in DISTRICT_ALTERNATE_PATTERNS)


def parse_cities(path: Path, country_codes: list[str]) -> dict[str, list[str]]:
    countries = set(country_codes)
    best_by_country: dict[str, dict[str, CityRow]] = {code: {} for code in country_codes}
    blocked_by_country: dict[str, set[str]] = {code: set() for code in country_codes}

    with zipfile.ZipFile(path) as archive:
        with archive.open("cities500.txt") as handle:
            for raw_line in handle:
                fields = raw_line.decode("utf-8").rstrip("\n").split("\t")
                if len(fields) < 19:
                    continue

                name = fields[2] or fields[1]
                feature_class = fields[6]
                feature_code = fields[7]
                country_code = fields[8]

                if country_code not in countries:
                    continue
                if feature_class != "P" or feature_code not in INCLUDED_FEATURE_CODES:
                    continue

                normalized = normalize_text(name)
                if not normalized:
                    continue
                if is_district_like_name(name) or has_district_like_alternate(fields[3]):
                    blocked_by_country[country_code].add(normalized)
                    best_by_country[country_code].pop(normalized, None)
                    continue
                if normalized in blocked_by_country[country_code]:
                    continue

                population = int(fields[14] or "0")
                row = CityRow(name=name, country_code=country_code, feature_code=feature_code, population=population)
                current = best_by_country[country_code].get(normalized)
                if current is None or row.dedupe_score > current.dedupe_score:
                    best_by_country[country_code][normalized] = row

    return {
        code: [row.name for row in sorted(best_by_country[code].values(), key=lambda row: row.sort_key)]
        for code in country_codes
    }


def render_typescript(cities_by_iso2: dict[str, list[str]]) -> str:
    lines = [
        "// AUTO-GENERATED by scripts/generateMetroCities.py - do not edit by hand.",
        "// Source: GeoNames cities500 dump.",
        "// Selection: country/city-level populated places; excludes sub-city sections and district-like administrative names.",
        "",
        "export const citiesByIso2: Record<string, string[]> = {",
    ]

    for code, cities in cities_by_iso2.items():
        lines.append(f"  {code}: [")
        for city in cities:
            lines.append(f"    {json.dumps(city)},")
        lines.append("  ],")

    lines.extend(
        [
            "}",
            "",
            "export const metroCitiesByIso2 = citiesByIso2",
            "",
            "export type CityCountryCode = keyof typeof citiesByIso2",
            "export type MetroCityCountryCode = CityCountryCode",
            "",
        ]
    )
    return "\n".join(lines)


def main() -> None:
    args = parse_args()
    country_codes = load_country_codes()
    ensure_source(args.source, args.refresh)
    cities_by_iso2 = parse_cities(args.source, country_codes)
    OUTPUT_PATH.write_text(render_typescript(cities_by_iso2), encoding="utf-8")

    total_cities = sum(len(cities) for cities in cities_by_iso2.values())
    empty_countries = [code for code, cities in cities_by_iso2.items() if not cities]
    print(f"Generated {total_cities} city names for {len(cities_by_iso2)} countries.")
    if empty_countries:
        print(f"No GeoNames city rows for: {', '.join(empty_countries)}")


if __name__ == "__main__":
    main()
