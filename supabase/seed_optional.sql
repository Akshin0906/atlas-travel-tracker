-- OPTIONAL example rows so you can see the app populated before adding your
-- own data. The app is designed for you to add entries through the UI, so
-- these are commented out by default. Uncomment to insert, and delete freely.

-- insert into public.travel_entries (key, entity_type, country_code, state_code, name, visited, favorite, cities, notes)
-- values
--   ('country:JP', 'country', 'JP', null, 'Japan', true, true, array['Tokyo', 'Kyoto'], 'Cherry blossom trip.'),
--   ('us_state:US-CA', 'us_state', 'US', 'CA', 'California', true, false, array['San Francisco'], 'Road trip along Highway 1.')
-- on conflict (key) do nothing;
