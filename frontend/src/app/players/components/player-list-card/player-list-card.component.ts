import { Component, Input, OnInit } from '@angular/core'
import { UiStoreService } from 'src/app/common/store/ui/ui.service'
import { PlayersStoreService } from '../../store/players.service'

import { Player } from '../../store/players.types'

@Component({
  selector: 'app-player-list-card',
  templateUrl: './player-list-card.component.html',
  styleUrls: ['./player-list-card.component.scss']
})
export class PlayerListCardComponent implements OnInit {
  @Input() player: Player | undefined

  constructor(private uiStoreService: UiStoreService, private playersStoreService: PlayersStoreService) {}

  ngOnInit(): void {}

  deletePlayer(player: Player) {
    this.playersStoreService.updatePlayer(player)
    this.uiStoreService.openPlayerDeleteModal()
  }

  updatePlayer(player: Player) {
    this.playersStoreService.updatePlayer(player)
    this.uiStoreService.openPlayerUpdateModal()
  }
}
