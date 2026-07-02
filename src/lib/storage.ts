// Persistence layer: Supabase when configured, localStorage otherwise.
import type { SupabaseClient } from '@supabase/supabase-js'
import type { EntityType, TravelEntry, VisitRecord } from '../types'
import { getSupabase } from './supabase'

export interface TravelStorage {
  readonly kind: 'supabase' | 'local'
  list(): Promise<TravelEntry[]>
  save(entry: TravelEntry): Promise<void>
  remove(key: string): Promise<void>
}

// ---------------------------------------------------------------------------
// localStorage fallback (used when Supabase env vars are absent)
// ---------------------------------------------------------------------------

const LOCAL_KEY = 'atlas.travel.entries.v1'

export class LocalStorageAdapter implements TravelStorage {
  readonly kind = 'local' as const

  constructor(private storage: Storage = window.localStorage) {}

  private read(): Record<string, TravelEntry> {
    try {
      const raw = this.storage.getItem(LOCAL_KEY)
      return raw ? (JSON.parse(raw) as Record<string, TravelEntry>) : {}
    } catch {
      return {}
    }
  }

  private write(entries: Record<string, TravelEntry>): void {
    this.storage.setItem(LOCAL_KEY, JSON.stringify(entries))
  }

  async list(): Promise<TravelEntry[]> {
    return Object.values(this.read())
  }

  async save(entry: TravelEntry): Promise<void> {
    const entries = this.read()
    entries[entry.key] = entry
    this.write(entries)
  }

  async remove(key: string): Promise<void> {
    const entries = this.read()
    delete entries[key]
    this.write(entries)
  }
}

// ---------------------------------------------------------------------------
// Supabase adapter
// ---------------------------------------------------------------------------

export interface TravelRow {
  key: string
  entity_type: EntityType
  country_code: string
  state_code: string | null
  name: string
  visited: boolean
  favorite: boolean
  visits: VisitRecord[]
  cities: string[]
  notes: string
  created_at: string
  updated_at: string
}

export function rowToEntry(row: TravelRow): TravelEntry {
  return {
    key: row.key,
    entityType: row.entity_type,
    countryCode: row.country_code,
    stateCode: row.state_code ?? undefined,
    name: row.name,
    visited: row.visited,
    favorite: row.favorite,
    visits: row.visits ?? [],
    cities: row.cities ?? [],
    notes: row.notes ?? '',
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

export function entryToRow(entry: TravelEntry): TravelRow {
  return {
    key: entry.key,
    entity_type: entry.entityType,
    country_code: entry.countryCode,
    state_code: entry.stateCode ?? null,
    name: entry.name,
    visited: entry.visited,
    favorite: entry.favorite,
    visits: entry.visits,
    cities: entry.cities,
    notes: entry.notes,
    created_at: entry.createdAt,
    updated_at: entry.updatedAt,
  }
}

export class SupabaseAdapter implements TravelStorage {
  readonly kind = 'supabase' as const

  constructor(private client: SupabaseClient) {}

  async list(): Promise<TravelEntry[]> {
    const { data, error } = await this.client.from('travel_entries').select('*')
    if (error) throw new Error(error.message)
    return (data as TravelRow[]).map(rowToEntry)
  }

  async save(entry: TravelEntry): Promise<void> {
    const { error } = await this.client
      .from('travel_entries')
      .upsert(entryToRow(entry), { onConflict: 'key' })
    if (error) throw new Error(error.message)
  }

  async remove(key: string): Promise<void> {
    const { error } = await this.client.from('travel_entries').delete().eq('key', key)
    if (error) throw new Error(error.message)
  }
}

export function createStorage(): TravelStorage {
  const supabase = getSupabase()
  return supabase ? new SupabaseAdapter(supabase) : new LocalStorageAdapter()
}
