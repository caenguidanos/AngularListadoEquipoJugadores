import { Component, Input, OnInit } from '@angular/core'

import { Player } from '../../store/players.types'

@Component({
  selector: 'app-player-list-card',
  templateUrl: './player-list-card.component.html',
  styleUrls: ['./player-list-card.component.scss']
})
export class PlayerListCardComponent implements OnInit {
  @Input() player: Player | undefined

  constructor() {}

  ngOnInit(): void {}
}
