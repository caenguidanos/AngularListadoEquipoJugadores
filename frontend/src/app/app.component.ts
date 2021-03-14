import { Component, OnInit } from '@angular/core'
import { iif, of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

import { AuthService } from './common/services/auth.service'
import { LeaguesService } from './leagues/services/leagues.service'
import { LeaguesStoreQuery } from './leagues/store/leagues.query'
import { PlayersService } from './players/services/players.service'
import { TeamsService } from './teams/services/teams.service'
import { TeamsStoreQuery } from './teams/store/teams.query'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private leaguesService: LeaguesService,
    private leaguesStoreQuery: LeaguesStoreQuery,
    private teamsStoreQuery: TeamsStoreQuery,
    private teamsService: TeamsService,
    private playersService: PlayersService
  ) {}

  ngOnInit() {
    // check credentials
    this.authService.verifyUserCredentials()
    // preload leagues
    this.leaguesService.findAll().subscribe()
    // subscribe to league
    this.leaguesStoreQuery.selectedLeague$
      .pipe(
        mergeMap((league) =>
          iif(() => !league, of(false), this.teamsService.findLeagueTeamsByID(league?.league_id))
        )
      )
      .subscribe()
    // subscribe to team
    this.teamsStoreQuery.selectedTeam$
      .pipe(
        mergeMap((team) => {
          const leagueSnapshot = this.leaguesStoreQuery.getValue().selectedLeague
          return !team || !leagueSnapshot?.season
            ? of(false)
            : this.playersService.findAllByTeamIDAndSeason(team.team_id, leagueSnapshot.season)
        })
      )
      .subscribe()
  }
}
