import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { UiStoreService } from 'src/app/common/store/ui/ui.service'

import { environment } from 'src/environments/environment'

import { LeaguesStoreService } from '../store/leagues.service'
import { League } from '../store/leagues.types'

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  constructor(
    private http: HttpClient,
    private leaguesStoreService: LeaguesStoreService,
    private uiStoreService: UiStoreService
  ) {}

  findAll(): Observable<League[]> {
    return this.http.get<League[]>(environment.api.basePath + '/leagues').pipe(
      tap((leagues) => {
        this.leaguesStoreService.updateLeagues(leagues)
      })
    )
  }

  selectLeague(league: League) {
    this.leaguesStoreService.updateSelectedLeague(league)
    this.uiStoreService.closeLoginModal()
    this.uiStoreService.closeLeagueModal()
  }
}
