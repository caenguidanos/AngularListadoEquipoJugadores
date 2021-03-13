import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'

import { Team } from './teams.types'

export interface TeamsState {
  data: Team[]
  selectedTeam: Team | null
}

export const emptySessionState: TeamsState = {
  data: [],
  selectedTeam: null
}

export function createInitialState(): TeamsState {
  return emptySessionState
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'teams', resettable: true })
export class TeamsStore extends Store<TeamsState> {
  constructor() {
    super(createInitialState())
  }
}
