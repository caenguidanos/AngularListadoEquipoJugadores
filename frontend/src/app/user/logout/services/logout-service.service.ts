import { Injectable } from '@angular/core'

import { environment } from 'src/environments/environment'

import { SessionStore } from 'src/app/common/store/session/session.store'

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private sessionStore: SessionStore) {}

  logout() {
    this.sessionStore.reset()
  }
}
