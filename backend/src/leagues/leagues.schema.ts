import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type LeagueDocument = League & Document

@Schema()
export class League {
  @Prop()
  league_id: number

  @Prop()
  name: string

  @Prop()
  season: number

  @Prop()
  logo: string

  @Prop()
  country: string
}

export const LeagueSchema = SchemaFactory.createForClass(League)
