import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { Observable } from 'rxjs'
import type { Request } from 'express'

function validateApiKey(authHeader: string[]): boolean {
  const apiKey =
    '9VY2ei2HF9CobgwtBoUhEwyFWSzFUZclLhgAWYrodjyMU6vD1q96HmxwMnkJWXdvQGD1Ss0CYuHbYz5ogCnc5M4m4lmyTfdXiTs3'

  return authHeader[1] === apiKey
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest()

    const authHeader = request.headers.authorization.split(/\s/)
    const isNotBearer = authHeader[0] !== 'Bearer'

    if (!authHeader) throw new UnauthorizedException('no apikey in header')
    if (isNotBearer) throw new UnauthorizedException('invalid apikey format')

    return validateApiKey(authHeader)
  }
}
