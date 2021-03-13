import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'

export interface UiState {
  modals: {
    loginModal: boolean
    leagueModal: boolean
  }
}

export function createInitialState(): UiState {
  return {
    modals: {
      loginModal: false,
      leagueModal: false
    }
  }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui', resettable: true })
export class UiStore extends Store<UiState> {
  constructor() {
    super(createInitialState())
  }
}
