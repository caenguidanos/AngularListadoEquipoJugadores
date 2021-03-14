import { Injectable } from '@angular/core'

import { EventsStore } from './events.store'
import { Event } from './events.types'

@Injectable({ providedIn: 'root' })
export class EventsStoreService {
  constructor(private eventsStore: EventsStore) {}

  updateEvents(events: Event[]) {
    this.eventsStore.update((state) => ({ data: events }))
  }
}
