import { Injectable } from '@angular/core'

import { SessionStoreQuery } from '../store/session/session.query'
import { UiStoreService } from '../store/ui/ui.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private sessionStoreQuery: SessionStoreQuery, private uiStoreService: UiStoreService) {}

  verifyUserCredentials() {
    this.sessionStoreQuery.isLoggedIn$.subscribe((v) => {
      if (!v) this.uiStoreService.openLoginModal()
    })
  }
}
