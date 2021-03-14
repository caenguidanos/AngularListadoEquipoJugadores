import { Component, OnInit } from '@angular/core'
import { LeaguesStoreQuery } from 'src/app/leagues/store/leagues.query'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(public leaguesStoreQuery: LeaguesStoreQuery) {}

  ngOnInit(): void {}
}
