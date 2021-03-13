import { Component, OnInit } from '@angular/core'
import { AuthService } from '../common/services/auth.service'
import { SessionStoreQuery } from '../common/store/session/session.query'
import { LeaguesService } from '../leagues/services/leagues.service'
import { LeaguesStoreQuery } from '../leagues/store/leagues.query'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public sessionStoreQuery: SessionStoreQuery,
    private leaguesService: LeaguesService,
    public leaguesStoreQuery: LeaguesStoreQuery
  ) {}

  ngOnInit(): void {
    this.authService.verifyUserCredentials()
    this.leaguesService.findAll().subscribe()
  }
}
