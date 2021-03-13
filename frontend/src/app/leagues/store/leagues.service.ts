import { Injectable } from '@angular/core'

import { LeaguesStore } from './leagues.store'
import type { League } from './leagues.types'

@Injectable({ providedIn: 'root' })
export class LeaguesStoreService {
  constructor(private leaguesStore: LeaguesStore) {}

  updateLeagues(leagues: League[]) {
    this.leaguesStore.update((state) => ({ data: leagues }))
  }

  updateSelectedLeague(league: League) {
    this.leaguesStore.update((state) => ({ selectedLeague: league }))
  }
}
