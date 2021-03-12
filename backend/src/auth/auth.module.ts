import { Module } from '@nestjs/common'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { CryptoService } from './crypto.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService, CryptoService]
})
export class AuthModule {}
