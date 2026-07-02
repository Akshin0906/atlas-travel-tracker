import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let client: SupabaseClient | null | undefined

/** Returns the Supabase client, or null when env vars are not configured. */
export function getSupabase(): SupabaseClient | null {
  if (client !== undefined) return client
  const url = import.meta.env.VITE_SUPABASE_URL
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY
  client = url && key ? createClient(url, key) : null
  return client
}

export function isSupabaseConfigured(): boolean {
  return getSupabase() !== null
}
