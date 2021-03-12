import { NestFactory } from '@nestjs/core'

import * as cookieParser from 'cookie-parser'
import * as compression from 'compression'
import * as helmet from 'helmet'
import * as morgan from 'morgan'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(cookieParser())
  app.use(compression())
  app.use(helmet())
  app.use(morgan('dev'))

  const PORT = parseInt(process.env.PORT || '') || 3000

  await app.listen(PORT, () => console.log(`Listen on port: ${PORT}`))
}

bootstrap()
