import { USER_PROFILES } from './profiles'
import { createStorage } from './storage'
import type { TravelEntry, UserProfileId } from '../types'

export interface ProfileTravelStats {
  countries: number
  states: number
}

export type ProfileStatsById = Record<UserProfileId, ProfileTravelStats>

export const EMPTY_PROFILE_STATS: ProfileTravelStats = { countries: 0, states: 0 }

export const EMPTY_PROFILE_STATS_BY_ID: ProfileStatsById = {
  akshin: EMPTY_PROFILE_STATS,
  neha: EMPTY_PROFILE_STATS,
}

export function profileStatsFromEntries(entries: TravelEntry[]): ProfileTravelStats {
  return entries.reduce<ProfileTravelStats>(
    (stats, entry) => {
      if (!entry.visited) return stats
      if (entry.entityType === 'country') return { ...stats, countries: stats.countries + 1 }
      return { ...stats, states: stats.states + 1 }
    },
    EMPTY_PROFILE_STATS,
  )
}

export async function loadProfileStats(): Promise<ProfileStatsById> {
  const stats = await Promise.all(
    USER_PROFILES.map(async (profile) => {
      const entries = await createStorage(profile.id).list()
      return [profile.id, profileStatsFromEntries(entries)] as const
    }),
  )

  return Object.fromEntries(stats) as ProfileStatsById
}
