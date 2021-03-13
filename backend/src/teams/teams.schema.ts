import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type TeamDocument = Team & Document

@Schema()
export class Team {
  @Prop()
  team_id: number

  @Prop()
  name: string

  @Prop()
  logo: string

  @Prop()
  country: string

  @Prop()
  league_id: number
}

export const TeamSchema = SchemaFactory.createForClass(Team)
