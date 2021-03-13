import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'

import { League } from './leagues.types'

export interface LeaguesState {
  data: League[]
  selectedLeague: number
}

export const emptySessionState: LeaguesState = {
  data: [],
  selectedLeague: 0
}

export function createInitialState(): LeaguesState {
  return emptySessionState
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'leagues', resettable: true })
export class LeaguesStore extends Store<LeaguesState> {
  constructor() {
    super(createInitialState())
  }
}
