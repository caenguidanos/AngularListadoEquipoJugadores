import { HttpService, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { from, iif, Observable, of } from 'rxjs'
import { map, mergeMap, tap } from 'rxjs/operators'
import { Model } from 'mongoose'

import { Team, TeamDocument } from './teams.schema'
import { LeagueTeam } from './teams.types'

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team.name) private teamModel: Model<TeamDocument>,
    private httpService: HttpService
  ) {}

  findAllByLeagueID(league_id: number) {
    return from(this.teamModel.find({ league_id })).pipe(
      tap((teams) => console.log(JSON.stringify({ teams }))),
      mergeMap((teams) =>
        iif(
          () => teams.length === 0,
          this.retrieveTeamsFromExternalAPI(league_id).pipe(
            mergeMap((leagueTeams) => this.teamModel.insertMany(leagueTeams))
          ),
          of(teams)
        )
      )
    )
  }

  retrieveTeamsFromExternalAPI(league_id: number): Observable<LeagueTeam[]> {
    return this.httpService
      .get<{ api: { results: number; teams: any[] } }>(
        `https://api-football-v1.p.rapidapi.com/v2/teams/league/${league_id}`,
        {
          headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
          }
        }
      )
      .pipe(
        map(({ data }) =>
          data.api.teams.map((rawTeam) => ({
            team_id: rawTeam.team_id,
            name: rawTeam.name,
            logo: rawTeam.logo,
            country: rawTeam.country,
            league_id
          }))
        )
      )
  }
}
