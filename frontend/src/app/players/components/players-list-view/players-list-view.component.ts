import { Component, OnInit } from '@angular/core'
import { TeamsStoreService } from 'src/app/teams/store/teams.service'
import { PlayersStoreQuery } from '../../store/players.query'
import { PlayersStore } from '../../store/players.store'

@Component({
  selector: 'app-players-list-view',
  templateUrl: './players-list-view.component.html',
  styleUrls: ['./players-list-view.component.scss']
})
export class PlayersListViewComponent implements OnInit {
  constructor(
    public playersStoreQuery: PlayersStoreQuery,
    private playersStore: PlayersStore,
    private teamsStoreService: TeamsStoreService
  ) {}

  ngOnInit(): void {}

  closeViewer() {
    this.playersStore.reset()
    this.teamsStoreService.updateSelectedTeam(null)
  }
}
