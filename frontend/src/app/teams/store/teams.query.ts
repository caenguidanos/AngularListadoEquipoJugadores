import { Injectable } from '@angular/core'
import { Query } from '@datorama/akita'

import { TeamsState, TeamsStore } from './teams.store'

@Injectable({ providedIn: 'root' })
export class TeamsStoreQuery extends Query<TeamsState> {
  teams$ = this.select((state) => state.data)
  selectedTeam$ = this.select((state) => state.selectedTeam)

  constructor(protected store: TeamsStore) {
    super(store)
  }
}
