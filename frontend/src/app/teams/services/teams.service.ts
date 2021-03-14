import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { environment } from 'src/environments/environment'

import { TeamsStoreService } from '../store/teams.service'
import { Team } from '../store/teams.types'

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  constructor(private http: HttpClient, private teamsStoreService: TeamsStoreService) {}

  findLeagueTeamsByID(league_id: number): Observable<Team[]> {
    return this.http
      .get<Team[]>(environment.api.basePath + '/teams/' + league_id)
      .pipe(tap((teams) => this.teamsStoreService.updateTeams(teams)))
  }

  selectTeam(team: Team) {
    this.teamsStoreService.updateSelectedTeam(team)
  }
}
