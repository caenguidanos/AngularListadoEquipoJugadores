import { CacheInterceptor, CacheModule, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { APP_INTERCEPTOR } from '@nestjs/core'

import { League, LeagueSchema } from './leagues.schema'
import { LeaguesController } from './leagues.controller'
import { LeaguesService } from './leagues.service'

@Module({
  imports: [
    CacheModule.register({
      ttl: 60 * 60
    }),
    MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }], 'football')
  ],
  controllers: [LeaguesController],
  providers: [
    LeaguesService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ]
})
export class LeaguesModule {}
