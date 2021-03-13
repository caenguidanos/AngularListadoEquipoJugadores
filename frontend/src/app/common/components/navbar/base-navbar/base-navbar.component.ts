import { Component, OnInit } from '@angular/core'

import { SessionStoreQuery } from 'src/app/common/store/session/session.query'
import { UiStoreService } from 'src/app/common/store/ui/ui.service'
import { LeaguesStoreQuery } from 'src/app/leagues/store/leagues.query'

@Component({
  selector: 'app-base-navbar',
  templateUrl: './base-navbar.component.html',
  styleUrls: ['./base-navbar.component.scss']
})
export class BaseNavbarComponent implements OnInit {
  constructor(
    public sessionStoreQuery: SessionStoreQuery,
    public leaguesStoreQuery: LeaguesStoreQuery,
    private uiStoreService: UiStoreService
  ) {}

  ngOnInit(): void {}

  openLeagueModalSelector() {
    this.uiStoreService.openLeagueModal()
  }
}
