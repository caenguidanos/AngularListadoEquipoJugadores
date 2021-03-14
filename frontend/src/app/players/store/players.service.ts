import { Injectable } from '@angular/core'

import { PlayersStore } from './players.store'
import { Player } from './players.types'

@Injectable({ providedIn: 'root' })
export class PlayersStoreService {
  constructor(private playersStore: PlayersStore) {}

  updatePlayers(players: Player[]) {
    this.playersStore.update((state) => ({ data: players }))
  }

  updatePlayer(player: Player) {
    this.playersStore.update((state) => ({ selectedPlayer: player }))
  }
}
