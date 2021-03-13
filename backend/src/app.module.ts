import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { MongooseModule } from '@nestjs/mongoose'

import { join } from 'path'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { LeaguesModule } from './leagues/leagues.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/football', {
      connectionName: 'football',
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env.local'], ignoreEnvFile: false }),
    ServeStaticModule.forRoot({ rootPath: join(process.cwd(), 'public') }),
    AuthModule,
    LeaguesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
