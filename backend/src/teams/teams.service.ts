import { HttpService, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { join } from 'path'
import { unlinkSync, writeFileSync } from 'fs'
import { from, iif, Observable } from 'rxjs'
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
    return from(import('../../cache.json')).pipe(
      mergeMap((cache) =>
        iif(
          () => cache.teams.includes(league_id),
          from(this.teamModel.find({ league_id })),
          this.retrieveTeamsFromExternalAPI(league_id).pipe(
            mergeMap((leagueTeams) => this.teamModel.insertMany(leagueTeams)),
            tap(() => {
              const cachePath = join(process.cwd(), 'cache.json')
              const newCache = [...cache.teams, league_id]
              unlinkSync(cachePath)
              writeFileSync(cachePath, JSON.stringify({ ...cache, teams: newCache }))
            })
          )
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
        map((res) => res.data.api.teams),
        map((rawTeams) => {
          return rawTeams.map((rawTeam) => {
            return {
              team_id: rawTeam.team_id,
              name: rawTeam.name,
              logo: rawTeam.logo,
              country: rawTeam.country,
              league_id
            }
          })
        })
      )
  }
}
