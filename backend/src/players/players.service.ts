import { HttpService, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { from, iif, Observable, of } from 'rxjs'
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

  create(DTO: TeamPlayerDTO) {
    const createdPlayer = new this.playerModel(DTO)
    return createdPlayer.save()
  }

  findByIdAndUpdate(id: string, DTO: TeamPlayerDTO) {
    this.playerModel.findByIdAndUpdate(id, DTO)
  }

  findByIdAndDelete(id: string) {
    return this.playerModel.findByIdAndDelete(id)
  }

  findAllByTeamIDAndSeason(team_id: number, season: number) {
    return from(this.playerModel.find({ team_id, season })).pipe(
      mergeMap((players) =>
        iif(
          () => players.length === 0,
          this.retrievePlayersFromExternalAPI(team_id, season).pipe(
            mergeMap((teamPlayers) => this.playerModel.insertMany(teamPlayers))
          ),
          of(players)
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
        map(({ data }) =>
          data.api.players.map((rawPlayer) => ({
            player_id: rawPlayer.player_id,
            firstname: rawPlayer.firstname,
            lastname: rawPlayer.lastname,
            position: rawPlayer.position,
            age: rawPlayer.age,
            nationality: rawPlayer.nationality,
            season,
            team_id
          }))
        )
      )
  }
}
