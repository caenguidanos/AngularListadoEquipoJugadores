import { Injectable } from '@angular/core'
import { Query } from '@datorama/akita'

import { LeaguesState, LeaguesStore } from './leagues.store'

@Injectable({ providedIn: 'root' })
export class LeaguesStoreQuery extends Query<LeaguesState> {
  leagues$ = this.select((state) => state.data)
  selectedLeague$ = this.select((state) => state.selectedLeague)

  constructor(protected store: LeaguesStore) {
    super(store)
  }
}
