import { Component, OnInit } from '@angular/core'
import { mergeMap } from 'rxjs/operators'
import { AuthService } from '../common/services/auth.service'
import { SessionStoreQuery } from '../common/store/session/session.query'
import { LeaguesService } from '../leagues/services/leagues.service'
import { LeaguesStoreQuery } from '../leagues/store/leagues.query'
import { TeamsService } from '../teams/services/teams.service'
import { TeamsStoreQuery } from '../teams/store/teams.query'

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
    public leaguesStoreQuery: LeaguesStoreQuery,
    public teamsStoreQuery: TeamsStoreQuery,
    private teamsService: TeamsService
  ) {}

  ngOnInit(): void {
    // check credentials
    this.authService.verifyUserCredentials()
    // preload leagues
    this.leaguesService.findAll().subscribe()
    // subscribe to league_id
    this.leaguesStoreQuery.selectedLeague$
      .pipe(mergeMap((league_id) => this.teamsService.findLeagueTeamsByID(league_id)))
      .subscribe()
  }
}
