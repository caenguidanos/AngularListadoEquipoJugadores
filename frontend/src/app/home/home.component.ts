import { Component, OnInit } from '@angular/core'
import { of } from 'rxjs'
import { mergeMap, tap } from 'rxjs/operators'

import { AuthService } from '../common/services/auth.service'
import { LeaguesService } from '../leagues/services/leagues.service'
import { TeamsService } from '../teams/services/teams.service'

import { TeamsStoreQuery } from '../teams/store/teams.query'
import { SessionStoreQuery } from '../common/store/session/session.query'
import { LeaguesStoreQuery } from '../leagues/store/leagues.query'
import { PlayersService } from '../players/services/players.service'
import { PlayersStoreQuery } from '../players/store/players.query'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public singleView = true

  constructor(
    public authService: AuthService,
    public sessionStoreQuery: SessionStoreQuery,
    private leaguesService: LeaguesService,
    public leaguesStoreQuery: LeaguesStoreQuery,
    public teamsStoreQuery: TeamsStoreQuery,
    private teamsService: TeamsService,
    private playersService: PlayersService,
    public playersStoreQuery: PlayersStoreQuery
  ) {}

  ngOnInit(): void {
    // check credentials
    this.authService.verifyUserCredentials()
    // preload leagues
    this.leaguesService.findAll().subscribe()
    // subscribe to league
    this.leaguesStoreQuery.selectedLeague$
      .pipe(
        mergeMap((league) => {
          if (!league?.league_id) return of(false)
          return this.teamsService.findLeagueTeamsByID(league.league_id)
        })
      )
      .subscribe()
    // subscribe to team
    this.teamsStoreQuery.selectedTeam$
      .pipe(
        mergeMap((team) => {
          const leagueSnapshot = this.leaguesStoreQuery.getValue().selectedLeague
          if (!team?.team_id || !leagueSnapshot?.season) return of(false)

          return this.playersService.findAllByTeamIDAndSeason(team.team_id, leagueSnapshot.season)
        })
      )
      .subscribe()
    // subscribe to players
    this.playersStoreQuery.players$
      .pipe(
        tap((players) => {
          if (!players) this.singleView = true
          else this.singleView = false
        })
      )
      .subscribe()
  }
}
