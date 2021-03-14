import { Component, OnInit } from '@angular/core'

import { EventsStoreQuery } from '../../store/events.query'

@Component({
  selector: 'app-events-table-view',
  templateUrl: './events-table-view.component.html',
  styleUrls: ['./events-table-view.component.scss']
})
export class EventsTableViewComponent implements OnInit {
  constructor(public eventsStoreQuery: EventsStoreQuery) {}

  ngOnInit(): void {}
}
