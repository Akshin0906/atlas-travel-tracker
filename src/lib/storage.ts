// Persistence layer: Supabase when configured, localStorage otherwise.
import type { SupabaseClient } from '@supabase/supabase-js'
import type { EntityType, TravelEntry, UserProfileId, VisitRecord } from '../types'
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

const LOCAL_KEY_PREFIX = 'atlas.travel.entries.v1.'

function scopedKey(profileId: UserProfileId, key: string): string {
  return `${profileId}:${key}`
}

function unscopedKey(profileId: UserProfileId, key: string): string {
  const prefix = `${profileId}:`
  return key.startsWith(prefix) ? key.slice(prefix.length) : key
}

export class LocalStorageAdapter implements TravelStorage {
  readonly kind = 'local' as const

  constructor(private profileId: UserProfileId, private storage: Storage = window.localStorage) {}

  private get localKey(): string {
    return `${LOCAL_KEY_PREFIX}${this.profileId}`
  }

  private read(): Record<string, TravelEntry> {
    try {
      const raw = this.storage.getItem(this.localKey)
      return raw ? (JSON.parse(raw) as Record<string, TravelEntry>) : {}
    } catch {
      return {}
    }
  }

  private write(entries: Record<string, TravelEntry>): void {
    this.storage.setItem(this.localKey, JSON.stringify(entries))
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

export function rowToEntry(row: TravelRow, profileId: UserProfileId): TravelEntry {
  return {
    key: unscopedKey(profileId, row.key),
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

export function entryToRow(entry: TravelEntry, profileId: UserProfileId): TravelRow {
  return {
    key: scopedKey(profileId, entry.key),
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

  constructor(private client: SupabaseClient, private profileId: UserProfileId) {}

  async list(): Promise<TravelEntry[]> {
    const { data, error } = await this.client
      .from('travel_entries')
      .select('*')
      .like('key', `${this.profileId}:%`)
    if (error) throw new Error(error.message)
    return (data as TravelRow[]).map((row) => rowToEntry(row, this.profileId))
  }

  async save(entry: TravelEntry): Promise<void> {
    const { error } = await this.client
      .from('travel_entries')
      .upsert(entryToRow(entry, this.profileId), { onConflict: 'key' })
    if (error) throw new Error(error.message)
  }

  async remove(key: string): Promise<void> {
    const { error } = await this.client.from('travel_entries').delete().eq('key', scopedKey(this.profileId, key))
    if (error) throw new Error(error.message)
  }
}

export function createStorage(profileId: UserProfileId): TravelStorage {
  const supabase = getSupabase()
  return supabase ? new SupabaseAdapter(supabase, profileId) : new LocalStorageAdapter(profileId)
}
