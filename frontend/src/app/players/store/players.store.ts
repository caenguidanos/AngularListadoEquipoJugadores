import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'

import { Player } from './players.types'

export interface PlayersState {
  data: Player[]
}

export const emptySessionState: PlayersState = {
  data: []
}

export function createInitialState(): PlayersState {
  return emptySessionState
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'players', resettable: true })
export class PlayersStore extends Store<PlayersState> {
  constructor() {
    super(createInitialState())
  }
}
