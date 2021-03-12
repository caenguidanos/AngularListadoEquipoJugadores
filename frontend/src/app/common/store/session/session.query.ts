import { Injectable } from '@angular/core'
import { Query } from '@datorama/akita'

import { SessionState, SessionStore } from './session.store'

@Injectable({ providedIn: 'root' })
export class SessionStoreQuery extends Query<SessionState> {
  user$ = this.select()
  isLoggedIn$ = this.select((state) => !!state.email)

  constructor(protected store: SessionStore) {
    super(store)
  }
}
