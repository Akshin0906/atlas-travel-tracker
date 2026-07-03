# Atlas Travel Tracker

A personal dark-mode travel tracker with a 3D globe, flat map, country/state search, visited and favorite overlays, Supabase persistence, and static tourism notes.

## Run Locally

```bash
npm install
npm run dev
```

Default PIN: `0906`.

## Environment

Supabase is optional. To use it, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set:

```txt
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

If Supabase variables are empty, Atlas falls back to browser `localStorage`.

PIN hashes are profile-specific and live in `src/lib/profiles.ts`. To generate a replacement hash:

```bash
npm run pin:hash -- 0906
```

The PIN is casual privacy only. In a static frontend, the hash ships in the browser bundle and can be brute-forced. Do not store sensitive data here.

## Supabase

1. Create a Supabase project.
2. Open the SQL editor.
3. Run `supabase/schema.sql`.
4. Put the project URL and anon key in `.env.local` or GitHub Actions secrets.

The schema creates `travel_entries` for countries and US states, including visited/favorite flags, visit records, city tags, notes, and timestamps.

## Using The App

Unlock with the PIN, then:

- Search a country or US state from the top bar.
- Click a country/state on the globe or flat map.
- Toggle visited/favorite in the detail panel.
- Add city tags, visit dates, and notes.
- Use Filters, Stats, Favorites, and Settings from the top menu.

Visited and favorite overlays can be toggled from the top-right controls or Settings.

## Tourism Seed Data

Static tourism data lives in `src/data/tourism/` and is exported through `src/data/tourismCountries.ts`.
Generated metro city autocomplete data lives at `public/data/metro-cities.json`; rebuild it with `npm run generate:cities`.

Shape:

- `major`: 5 cities with 5 POIs each
- `mid`: 3 cities with 3 POIs each
- `small`: 1 city with 1 POI

Each country includes climate tags, travel styles, best months, seasonal notes, exactly 3 vacation-style bullets, pros, cons, and POIs.

## Deploy To GitHub Pages

1. Push to `main`.
2. In GitHub repo settings, enable Pages with GitHub Actions.
3. Add optional secrets:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. The workflow in `.github/workflows/deploy.yml` runs tests, builds Vite, and deploys `dist`.

## Checks

```bash
npm run test:ci
npm run build
```
