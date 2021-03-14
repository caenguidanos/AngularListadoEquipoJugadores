import { Component, Input, OnInit } from '@angular/core'

import { Event } from '../../store/events.types'

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {
  @Input() events: Event[] | undefined

  constructor() {}

  ngOnInit(): void {}
}
