import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { UiStoreQuery } from 'src/app/common/store/ui/ui.query'
import { UiStoreService } from 'src/app/common/store/ui/ui.service'
import { LeaguesStore } from 'src/app/leagues/store/leagues.store'
import { TeamsStore } from 'src/app/teams/store/teams.store'
import { PlayersService } from '../../services/players.service'
import { PlayersStore } from '../../store/players.store'

@Component({
  selector: 'app-player-create-modal',
  templateUrl: './player-create-modal.component.html',
  styleUrls: ['./player-create-modal.component.scss']
})
export class PlayerCreateModalComponent implements OnInit {
  createPlayerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required])
  })

  constructor(
    public uiStoreQuery: UiStoreQuery,
    public uiStoreService: UiStoreService,
    private playersService: PlayersService,
    private leaguesStore: LeaguesStore,
    private teamsStore: TeamsStore
  ) {}

  ngOnInit(): void {}

  get firstname() {
    return this.createPlayerForm.get('firstname')
  }

  get lastname() {
    return this.createPlayerForm.get('lastname')
  }

  get position() {
    return this.createPlayerForm.get('position')
  }

  get age() {
    return this.createPlayerForm.get('age')
  }

  get nationality() {
    return this.createPlayerForm.get('nationality')
  }

  onSubmit() {
    this.uiStoreService.closePlayerCreateModal()

    this.playersService
      .createPlayer({
        ...this.createPlayerForm.value,
        season: this.leaguesStore.getValue().selectedLeague?.season,
        team_id: this.teamsStore.getValue().selectedTeam?.team_id
      })
      .subscribe()
  }

  close() {
    this.uiStoreService.closePlayerCreateModal()
  }
}
