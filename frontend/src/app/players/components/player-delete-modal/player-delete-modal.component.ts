import { Component, OnInit } from '@angular/core'
import { UiStoreQuery } from 'src/app/common/store/ui/ui.query'
import { UiStoreService } from 'src/app/common/store/ui/ui.service'
import { PlayersService } from '../../services/players.service'
import { PlayersStore } from '../../store/players.store'

@Component({
  selector: 'app-player-delete-modal',
  templateUrl: './player-delete-modal.component.html',
  styleUrls: ['./player-delete-modal.component.scss']
})
export class PlayerDeleteModalComponent implements OnInit {
  constructor(
    public uiStoreQuery: UiStoreQuery,
    public uiStoreService: UiStoreService,
    private playersService: PlayersService,
    private playersStore: PlayersStore
  ) {}

  ngOnInit(): void {}

  delete() {
    this.uiStoreService.closePlayerDeleteModal()
    const _id = this.playersStore.getValue().selectedPlayer?._id
    if (_id) this.playersService.deletePlayerByID(_id).subscribe()
  }

  close() {
    this.uiStoreService.closePlayerDeleteModal()
  }
}
