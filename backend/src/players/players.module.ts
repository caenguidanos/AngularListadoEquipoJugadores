import { HttpModule, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { PlayersController } from './players.controller'
import { Player, PlayerSchema } from './players.schema'
import { PlayersService } from './players.service'

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }], 'football')],
  controllers: [PlayersController],
  providers: [PlayersService]
})
export class PlayersModule {}
