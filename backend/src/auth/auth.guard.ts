import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { Observable } from 'rxjs'
import type { Request } from 'express'

type ValidateAPIKey = { providedToken: string }
function validateApiKey(arg: ValidateAPIKey): boolean {
  const apiKey =
    '9VY2ei2HF9CobgwtBoUhEwyFWSzFUZclLhgAWYrodjyMU6vD1q96HmxwMnkJWXdvQGD1Ss0CYuHbYz5ogCnc5M4m4lmyTfdXiTs3'

  if (!arg.providedToken) return false

  const isAuthorized = arg.providedToken === apiKey
  return isAuthorized
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest()

    const authHeader = request.headers.authorization.split(/\s/)
    const isNotBearer = authHeader[0] !== 'Bearer'

    if (!authHeader) throw new UnauthorizedException('no api_key in header')
    if (isNotBearer) throw new UnauthorizedException('invalid api_key format')

    return validateApiKey({ providedToken: authHeader[1] })
  }
}
