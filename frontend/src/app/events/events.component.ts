import { Component, OnInit } from '@angular/core'
import { LeaguesStoreQuery } from '../leagues/store/leagues.query'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  constructor(public leaguesStoreQuery: LeaguesStoreQuery) {}

  ngOnInit(): void {}
}
