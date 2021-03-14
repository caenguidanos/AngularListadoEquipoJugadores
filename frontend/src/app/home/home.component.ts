import { Component, OnInit } from '@angular/core'

import { PlayersStoreQuery } from '../players/store/players.query'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public singleView = true

  constructor(private playersStoreQuery: PlayersStoreQuery) {}

  ngOnInit(): void {
    this.playersStoreQuery.players$.subscribe((players) => {
      !players ? (this.singleView = true) : (this.singleView = false)
    })
  }
}
