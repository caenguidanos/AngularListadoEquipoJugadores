import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common'

import { CredentialsDTO } from './auth.dto'
import { CryptoService } from './crypto.service'
import { CookieService } from './cookie.service'

import type { User } from './auth.types'
import type { Response } from 'express'

const mockUsers = [
  {
    username: 'jmourinho',
    password: '261963',
    email: 'jose@mourinho.com',
    name: 'José',
    lastname: 'Mourinho'
  },
  {
    username: 'zzidane',
    password: '231972',
    email: 'z@zidane.com',
    name: 'Zinedine',
    lastname: 'Zidane'
  }
]

@Injectable()
export class AuthService {
  constructor(private cryptoService: CryptoService, private cookieService: CookieService) {}

  async loginUser(res: Response, credentials: CredentialsDTO) {
    const user: User = this.verifyUserCredentials(credentials)
    const hash = await this.cryptoService.ironEncrypt(user)

    return { response: this.cookieService.setCookie(res, hash), user }
  }

  logoutUser(res: Response) {
    return this.cookieService.removeCookie(res)
  }

  private verifyUserCredentials(credentials: CredentialsDTO): User {
    const matchUser = mockUsers.filter(
      (v) => v.username === credentials.username || v.email === credentials.username
    )

    const userNotExists = matchUser.length === 0
    if (userNotExists) throw new ForbiddenException('user not exists')

    const user = matchUser.shift()
    const notHasAccess = user.password !== credentials.password
    if (notHasAccess) throw new UnauthorizedException('invalid credentials')

    delete user.password
    return user
  }
}
