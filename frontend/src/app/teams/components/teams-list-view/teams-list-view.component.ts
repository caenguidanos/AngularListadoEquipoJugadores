import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { map, mergeMap, tap } from 'rxjs/operators'
import { LeaguesStoreQuery } from 'src/app/leagues/store/leagues.query'

import { TeamsStoreQuery } from '../../store/teams.query'
import { Team } from '../../store/teams.types'

@Component({
  selector: 'app-teams-list-view',
  templateUrl: './teams-list-view.component.html',
  styleUrls: ['./teams-list-view.component.scss']
})
export class TeamsListViewComponent implements OnInit {
  public filterValue = new FormControl('')

  public teams: Team[] = []
  public filteredTeams: Team[] = []

  constructor(public teamsStoreQuery: TeamsStoreQuery, public leagueStoreQuery: LeaguesStoreQuery) {}

  ngOnInit(): void {
    this.teamsStoreQuery.teams$.subscribe((teams) => {
      this.teams = teams
      this.filteredTeams = teams
    })

    this.filterValue.valueChanges.subscribe((v) => {
      if (!v) {
        this.filteredTeams = [...this.teams]
      } else {
        this.filteredTeams = [...this.teams].filter((team) =>
          team.name.toLowerCase().includes(v.toLowerCase())
        )
      }
    })
  }
}
