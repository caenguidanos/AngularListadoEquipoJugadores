import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { map, mergeMap } from 'rxjs/operators'

import { SessionStore } from 'src/app/common/store/session/session.store'
import { LeaguesService } from '../../services/leagues.service'
import { LeaguesStoreQuery } from '../../store/leagues.query'

import type { League } from '../../store/leagues.types'

@Component({
  selector: 'app-league-selector',
  templateUrl: './league-selector.component.html',
  styleUrls: ['./league-selector.component.scss']
})
export class LeagueSelectorComponent implements OnInit {
  filterValue = new FormControl('')
  seasonValue = new FormControl('Seleccione temporada')

  leagues: League[] = []

  constructor(
    public sessionStore: SessionStore,
    public leaguesStoreQuery: LeaguesStoreQuery,
    private leaguesService: LeaguesService
  ) {}

  public selectLeague(id: number) {
    this.leaguesService.selectLeague(id)
  }

  ngOnInit(): void {
    this.seasonValue.valueChanges
      .pipe(
        mergeMap((season) =>
          this.leaguesStoreQuery.leagues$.pipe(
            map((leagues) => {
              return leagues.filter((league) => league.season === parseInt(season))
            })
          )
        )
      )
      .subscribe((leagues) => {
        this.filterValue.reset()
        this.leagues = leagues
      })

    this.filterValue.valueChanges
      .pipe(
        mergeMap((text: string) =>
          this.leaguesStoreQuery.leagues$.pipe(
            map((leagues) => {
              return leagues.filter(
                (league) =>
                  league.season === parseInt(this.seasonValue.value) &&
                  league.name.toLowerCase().includes(text?.toLowerCase())
              )
            })
          )
        )
      )
      .subscribe((leagues) => {
        this.leagues = leagues
      })
  }
}
