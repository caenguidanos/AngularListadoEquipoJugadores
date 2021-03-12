import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'

import { SessionUser } from './session.types'

export interface SessionState extends SessionUser {}

export const emptySessionState: SessionState = {
  name: '',
  lastname: '',
  username: '',
  email: '',
  image: '',
  hash: ''
}

export function createInitialState(): SessionState {
  return emptySessionState
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session', resettable: true })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState())
  }
}
