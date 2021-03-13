import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common'

import { CredentialsDTO } from './auth.dto'
import { CryptoService } from './crypto.service'

import type { User } from './auth.types'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

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
  constructor(private cryptoService: CryptoService) {}

  loginUser(credentials: CredentialsDTO): Observable<any> {
    const user: User = this.verifyUserCredentials(credentials)
    return this.cryptoService.ironEncrypt(user).pipe(
      map((hash: string) => {
        return {
          ...user,
          hash
        }
      })
    )
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

    return {
      username: user.username,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
      image: user.image
    }
  }
}
