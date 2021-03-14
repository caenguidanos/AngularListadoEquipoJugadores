import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'

import { Event } from './events.types'

export interface EventsState {
  data: Event[]
}

export const emptySessionState: EventsState = {
  data: []
}

export function createInitialState(): EventsState {
  return emptySessionState
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'events', resettable: true })
export class EventsStore extends Store<EventsState> {
  constructor() {
    super(createInitialState())
  }
}
