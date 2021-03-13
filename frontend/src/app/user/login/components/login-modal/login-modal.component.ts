import { Component, OnInit } from '@angular/core'

import { SessionStoreQuery } from 'src/app/common/store/session/session.query'
import { UiStoreQuery } from 'src/app/common/store/ui/ui.query'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  constructor(public uiStoreQuery: UiStoreQuery, public sessionStoreQuery: SessionStoreQuery) {}

  ngOnInit(): void {}
}
