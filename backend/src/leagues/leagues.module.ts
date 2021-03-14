import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { League, LeagueSchema } from './leagues.schema'
import { LeaguesController } from './leagues.controller'
import { LeaguesService } from './leagues.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }], 'football')],
  controllers: [LeaguesController],
  providers: [LeaguesService]
})
export class LeaguesModule {}
