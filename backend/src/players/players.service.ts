import { HttpService, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { join } from 'path'
import { unlinkSync, writeFileSync } from 'fs'
import { from, iif, Observable } from 'rxjs'
import { map, mergeMap, tap } from 'rxjs/operators'
import { Model } from 'mongoose'

import { Player, PlayerDocument } from './players.schema'

import type { TeamPlayer, TeamPlayerDTO } from './players.types'

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>,
    private httpService: HttpService
  ) {}

  findByIdAndUpdate(id: string, DTO: TeamPlayerDTO) {
    this.playerModel.findByIdAndUpdate(id, DTO)
  }

  findByIdAndDelete(id: string) {
    this.playerModel.findByIdAndDelete(id)
  }

  findAllByTeamIDAndSeason(team_id: number, season: number) {
    return from(import('../../cache.json')).pipe(
      mergeMap((cache) =>
        iif(
          () => cache.players.includes(`${team_id}-${season}`),
          from(this.playerModel.find({ team_id, season })),
          this.retrievePlayersFromExternalAPI(team_id, season).pipe(
            mergeMap((teamPlayers) => this.playerModel.insertMany(teamPlayers)),
            tap(() => {
              const cachePath = join(process.cwd(), 'cache.json')
              const newCache = [...cache.players, `${team_id}-${season}`]
              unlinkSync(cachePath)
              writeFileSync(cachePath, JSON.stringify({ ...cache, players: newCache }))
            })
          )
        )
      )
    )
  }

  retrievePlayersFromExternalAPI(team_id: number, season: number): Observable<TeamPlayer[]> {
    return this.httpService
      .get<{ api: { results: number; players: any[] } }>(
        `https://api-football-v1.p.rapidapi.com/v2/players/squad/${team_id}/${season}`,
        {
          headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
          }
        }
      )
      .pipe(
        map((res) => res.data.api.players),
        map((rawPlayers) => {
          return rawPlayers.map((rawPlayer) => {
            return {
              player_id: rawPlayer.player_id,
              firstname: rawPlayer.firstname,
              lastname: rawPlayer.lastname,
              position: rawPlayer.position,
              age: rawPlayer.age,
              nacionality: rawPlayer.nacionality,
              season,
              team_id
            }
          })
        })
      )
  }
}
