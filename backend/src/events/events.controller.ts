import { Controller, Get, UseGuards } from '@nestjs/common'

import { AuthGuard } from 'src/auth/auth.guard'

import { EventsService } from './events.service'

@UseGuards(AuthGuard)
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  findAll() {
    return this.eventsService.findAll()
  }
}
