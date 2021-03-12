import { Module } from '@nestjs/common'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { CookieService } from './cookie.service'
import { CryptoService } from './crypto.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService, CookieService, CryptoService]
})
export class AuthModule {}
