import { HttpModule, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { TeamsController } from './teams.controller'
import { Team, TeamSchema } from './teams.schema'
import { TeamsService } from './teams.service'

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }], 'football')],
  controllers: [TeamsController],
  providers: [TeamsService]
})
export class TeamsModule {}
