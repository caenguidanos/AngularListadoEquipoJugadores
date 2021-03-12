import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  ServiceUnavailableException,
  UnauthorizedException
} from '@nestjs/common'

import { CredentialsDTO } from './auth.dto'
import { CryptoService } from './crypto.service'
import { CookieService } from './cookie.service'

import type { User } from './auth.types'
import type { Response, Request } from 'express'

const mockUsers = [
  {
    username: 'jmourinho',
    password: '261963',
    email: 'jose@mourinho.com',
    name: 'José',
    lastname: 'Mourinho',
    image: '/mourinho_100x100.jpg'
  },
  {
    username: 'zzidane',
    password: '231972',
    email: 'z@zidane.com',
    name: 'Zinedine',
    lastname: 'Zidane',
    image: '/zidane_100x100.jpg'
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

  async profile(req: Request) {
    const token = this.cookieService.getCookie(req)
    if (!token) throw new BadRequestException('no auth cookie')

    try {
      const user = await this.cryptoService.ironDecrypt(token)
      return user
    } catch (error) {
      throw new ServiceUnavailableException(error.message)
    }
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
