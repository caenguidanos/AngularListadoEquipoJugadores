import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { environment } from 'src/environments/environment'
import { EventsStoreService } from '../store/events.service'
import { Event } from '../store/events.types'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient, private eventsStoreService: EventsStoreService) {}

  findAll(): Observable<Event[]> {
    const url = `${environment.api.basePath}/events`

    return this.http.get<Event[]>(url).pipe(
      tap((events) => {
        if (events.length !== 0) {
          this.eventsStoreService.updateEvents(events)
        } else {
          alert('No hay eventos')
        }
      })
    )
  }
}
