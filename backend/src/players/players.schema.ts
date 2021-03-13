import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PlayerDocument = Player & Document

@Schema()
export class Player {
  @Prop()
  player_id: number

  @Prop()
  firstname: string

  @Prop()
  lastname: string

  @Prop()
  position: string

  @Prop()
  age: number

  @Prop()
  nacionality: string

  @Prop()
  season: number

  @Prop()
  team_id: number
}

export const PlayerSchema = SchemaFactory.createForClass(Player)
