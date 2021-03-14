import { Injectable } from '@angular/core'
import { Query } from '@datorama/akita'

import { PlayersState, PlayersStore } from './players.store'

@Injectable({ providedIn: 'root' })
export class PlayersStoreQuery extends Query<PlayersState> {
  players$ = this.select((state) => (state.data.length === 0 ? null : state.data))
  seletedPlayers$ = this.select((state) => state.selectedPlayer)

  constructor(protected store: PlayersStore) {
    super(store)
  }
}
