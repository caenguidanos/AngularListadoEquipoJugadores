import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException
} from '@nestjs/common'
import { Observable } from 'rxjs'
import type { Request } from 'express'

type ValidateAPIKey = { providedToken: string }
function validateApiKey(arg: ValidateAPIKey): boolean {
  const apiKey = process.env.API_KEY

  if (!arg.providedToken) return false

  const isAuthorized = arg.providedToken === apiKey
  return isAuthorized
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest()

    let authHeader: string[]

    try {
      authHeader = request.headers.authorization.split(/\s/)
    } catch (error) {
      throw new ForbiddenException('no api_key in header')
    }

    const isNotBearer = authHeader[0] !== 'Bearer'

    if (isNotBearer) throw new UnauthorizedException('invalid api_key format')

    return validateApiKey({ providedToken: authHeader[1] })
  }
}
