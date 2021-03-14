import { HttpModule, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { EventsController } from './events.controller'
import { Event, EventSchema } from './events.schema'
import { EventsService } from './events.service'

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }], 'football')],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
