import { Injectable } from '@nestjs/common'

import type { CookieOptions, Request, Response } from 'express'

@Injectable()
export class CookieService {
  private cookieName = 'football:auth'

  createCookie(res: Response, data: string, options: CookieOptions): Response {
    const cookieDefaults: CookieOptions = {
      secure: false,
      httpOnly: true,
      maxAge: 60 * 60 * 8,
      path: '/',
      sameSite: 'strict',
      domain: 'localhost',
      ...options
    }

    return res.cookie(this.cookieName, data, cookieDefaults)
  }

  removeCookie(res: Response): Response {
    return this.createCookie(res, '', { maxAge: 0 })
  }

  getCookie(req: Request): string {
    return req.cookies[this.cookieName]
  }

  setCookie(res: Response, hash: string): Response {
    return this.createCookie(res, hash, {})
  }
}
