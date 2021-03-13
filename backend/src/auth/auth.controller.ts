import { Body, Controller, Post, UseGuards } from '@nestjs/common'

import { CredentialsDTO } from './auth.dto'

import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'

@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  loginUser(@Body() credentials: CredentialsDTO) {
    return this.authService.loginUser(credentials)
  }
}
