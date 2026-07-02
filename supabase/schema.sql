-- Atlas travel tracker — Supabase schema.
-- Apply via the Supabase SQL editor or `supabase db push`.

create table if not exists public.travel_entries (
  -- Stable entity key, e.g. 'country:FR' or 'us_state:US-CA'. Used for upserts.
  key text primary key,
  entity_type text not null check (entity_type in ('country', 'us_state')),
  -- ISO 3166-1 alpha-2 (always 'US' for states)
  country_code text not null,
  -- USPS state code, null for countries
  state_code text,
  name text not null,
  visited boolean not null default false,
  favorite boolean not null default false,
  -- Array of visit records: [{ "id": "...", "startDate": "YYYY-MM-DD", "endDate": "...", "note": "..." }]
  visits jsonb not null default '[]'::jsonb,
  -- Cities visited, as free-form tags
  cities text[] not null default '{}',
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists travel_entries_visited_idx on public.travel_entries (visited) where visited;
create index if not exists travel_entries_favorite_idx on public.travel_entries (favorite) where favorite;

-- Keep updated_at fresh on every update.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists travel_entries_updated_at on public.travel_entries;
create trigger travel_entries_updated_at
  before update on public.travel_entries
  for each row execute function public.set_updated_at();

-- This is a single-user personal app gated by a client-side PIN. The anon key
-- gets full access to this one table; anyone with the anon key can read/write
-- it, so do not store anything sensitive here. See the README security note.
alter table public.travel_entries enable row level security;

drop policy if exists "anon full access" on public.travel_entries;
create policy "anon full access"
  on public.travel_entries
  for all
  using (true)
  with check (true);
