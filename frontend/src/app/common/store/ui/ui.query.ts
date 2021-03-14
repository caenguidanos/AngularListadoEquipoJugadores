import { Injectable } from '@angular/core'
import { Query } from '@datorama/akita'

import { UiState, UiStore } from './ui.store'

@Injectable({ providedIn: 'root' })
export class UiStoreQuery extends Query<UiState> {
  loginModal$ = this.select((state) => state.modals.loginModal)
  leagueModal$ = this.select((state) => state.modals.leagueModal)
  deletePlayerModal$ = this.select((state) => state.modals.playerDeleteModal)
  createPlayerModal$ = this.select((state) => state.modals.playerCreateModal)
  updatePlayerModal$ = this.select((state) => state.modals.playerUpdateModal)

  constructor(protected store: UiStore) {
    super(store)
  }
}
