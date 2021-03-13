import { Component, OnInit } from '@angular/core'

import { UiStoreQuery } from 'src/app/common/store/ui/ui.query'
import { UiStoreService } from 'src/app/common/store/ui/ui.service'

@Component({
  selector: 'app-league-selector-modal',
  templateUrl: './league-selector-modal.component.html',
  styleUrls: ['./league-selector-modal.component.scss']
})
export class LeagueSelectorModalComponent implements OnInit {
  constructor(public uiStoreQuery: UiStoreQuery, public uiStoreService: UiStoreService) {}

  ngOnInit(): void {}

  close() {
    this.uiStoreService.closeLeagueModal()
  }
}
