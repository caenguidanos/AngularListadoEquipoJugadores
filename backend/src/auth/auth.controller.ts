import { Body, Controller, InternalServerErrorException, Post, Req, Res, UseGuards } from '@nestjs/common'
import { Request, Response } from 'express'

import { CredentialsDTO } from './auth.dto'

import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'

@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async loginUser(@Body() credentials: CredentialsDTO, @Res() res: Response) {
    const { response, user } = await this.authService.loginUser(res, credentials)
    return response.status(200).send(user)
  }

  @Post('logout')
  logout(@Res() res: Response) {
    return this.authService.logoutUser(res).status(200).send('logged out')
  }
}
