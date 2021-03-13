import { Injectable } from '@angular/core'

import { TeamsStore } from './teams.store'
import { Team } from './teams.types'

@Injectable({ providedIn: 'root' })
export class TeamsStoreService {
  constructor(private teamsStore: TeamsStore) {}

  updateTeams(teams: Team[]) {
    this.teamsStore.update((state) => ({ data: teams }))
  }

  updateSelectedTeam(team: Team) {
    this.teamsStore.update((state) => ({ selectedTeam: team }))
  }
}
