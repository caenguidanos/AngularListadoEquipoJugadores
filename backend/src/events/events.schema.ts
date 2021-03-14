import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type EventDocument = Event & Document

@Schema()
export class Event {
  @Prop()
  teamName: string

  @Prop()
  player: string

  @Prop()
  assist: string

  @Prop()
  type: string
}

export const EventSchema = SchemaFactory.createForClass(Event)
