import { HttpService, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { from, iif, Observable, of } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'

import { EventDocument } from './events.schema'
import { FootballEvent } from './events.types'

@Injectable()
export class EventsService {
  constructor(
    private httpService: HttpService,
    @InjectModel(Event.name) private eventModel: Model<EventDocument>
  ) {}

  findAll() {
    return from(this.eventModel.find()).pipe(
      mergeMap((events) =>
        iif(
          () => events.length === 0,
          this.retrieveEventsFromExternalAPI().pipe(
            mergeMap((rawEvents) => this.eventModel.insertMany(rawEvents))
          ),
          of(events)
        )
      )
    )
  }

  retrieveEventsFromExternalAPI(): Observable<FootballEvent[]> {
    return this.httpService
      .get<{ api: { results: number; events: any[] } }>(
        'https://api-football-v1.p.rapidapi.com/v2/events/214226',
        {
          headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
          }
        }
      )
      .pipe(
        map(({ data }) =>
          data.api.events.map((rawEvent) => ({
            teamName: rawEvent.teamName,
            player: rawEvent.player,
            assist: rawEvent.assist,
            type: rawEvent.type
          }))
        )
      )
  }
}
