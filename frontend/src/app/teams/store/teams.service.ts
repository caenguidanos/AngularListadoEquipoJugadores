import { Injectable } from '@angular/core'

import { TeamsStore } from './teams.store'
import { Team } from './teams.types'

@Injectable({ providedIn: 'root' })
export class TeamsStoreService {
  constructor(private teamsStore: TeamsStore) {}

  updateTeams(teams: Team[]) {
    this.teamsStore.update((state) => ({ data: teams }))
  }

  updateSelectedTeam(id: number) {
    this.teamsStore.update((state) => ({ selectedTeam: id }))
  }
}
