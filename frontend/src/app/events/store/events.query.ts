import { Injectable } from '@angular/core'
import { Query } from '@datorama/akita'

import { EventsState, EventsStore } from './events.store'

@Injectable({ providedIn: 'root' })
export class EventsStoreQuery extends Query<EventsState> {
  events$ = this.select((state) => (state.data.length === 0 ? null : state.data))

  constructor(protected store: EventsStore) {
    super(store)
  }
}
