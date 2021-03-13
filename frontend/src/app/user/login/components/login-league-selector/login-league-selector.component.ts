import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

import { SessionStore } from 'src/app/common/store/session/session.store'

@Component({
  selector: 'app-login-league-selector',
  templateUrl: './login-league-selector.component.html',
  styleUrls: ['./login-league-selector.component.scss']
})
export class LoginLeagueSelectorComponent implements OnInit {
  filterValue = new FormControl('')

  leagues = [
    {
      name: 'World Cup',
      type: 'Cup',
      country: 'World',
      season: 2018,
      season_start: '2018-06-14',
      season_end: '2018-07-15',
      logo: 'https://media.api-football.com/leagues/1.png'
    },
    {
      name: 'Premier League',
      type: 'League',
      country: 'England',
      season: 2018,
      season_start: '2018-08-10',
      season_end: '2019-05-12',
      logo: 'https://media.api-football.com/leagues/2.png'
    },
    {
      name: 'Ligue 1',
      type: 'League',
      country: 'France',
      season: 2018,
      season_start: '2018-08-10',
      season_end: '2019-05-24',
      logo: 'https://media.api-football.com/leagues/4.svg'
    },
    {
      name: 'Serie A',
      type: 'League',
      country: 'Brazil',
      season: 2018,
      season_start: '2018-04-14',
      season_end: '2018-12-02',
      logo: 'https://media.api-football.com/leagues/6.png'
    }
  ]

  filteredLeagues = [...this.leagues]

  constructor(public sessionStore: SessionStore) {}

  ngOnInit(): void {
    this.filterValue.valueChanges.subscribe((v) => {
      if (!v) {
        this.filteredLeagues = [...this.leagues]
      } else {
        this.filteredLeagues = [...this.leagues].filter(
          (j) => j.name.toLowerCase().includes(v?.toLowerCase()) || j.season.toString().includes(v)
        )
      }
    })
  }
}
