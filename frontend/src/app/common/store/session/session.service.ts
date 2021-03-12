import { Injectable } from '@angular/core'

import { SessionStore } from './session.store'
import { SessionUser } from './session.types'

@Injectable({ providedIn: 'root' })
export class SessionStoreService {
  constructor(private sessionStore: SessionStore) {}

  updateUser(user: SessionUser) {
    this.sessionStore.update(user)
  }
}
