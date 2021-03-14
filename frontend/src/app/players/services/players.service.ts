import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { environment } from 'src/environments/environment'

import { PlayersStoreService } from '../store/players.service'

import type { Player } from '../store/players.types'

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http: HttpClient, private playersStoreService: PlayersStoreService) {}

  findAllByTeamIDAndSeason(team_id: number, season: number): Observable<Player[]> {
    const url = `${environment.api.basePath}/players/${team_id}_${season}`

    return this.http.get<Player[]>(url).pipe(
      tap((players) => {
        if (players.length !== 0) {
          this.playersStoreService.updatePlayers(players)
        } else {
          alert('No hay jugadores en este equipo')
        }
      })
    )
  }
}
