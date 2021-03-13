import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'

import { Team } from './teams.types'

export interface TeamsState {
  data: Team[]
  selectedTeam: number
}

export const emptySessionState: TeamsState = {
  data: [],
  selectedTeam: 0
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
