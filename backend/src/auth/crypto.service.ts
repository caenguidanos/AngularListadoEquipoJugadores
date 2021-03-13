import { Injectable } from '@nestjs/common'

import * as Iron from '@hapi/iron'
import { from, Observable } from 'rxjs'

@Injectable()
export class CryptoService {
  private secret: string

  constructor() {
    this.secret = process.env.CRYPTO_SECRET
  }

  ironEncrypt(data: any): Observable<string> {
    return from(Iron.seal(data, this.secret, Iron.defaults))
  }

  ironDecrypt(token: string): Observable<any> {
    return from(Iron.unseal(token, this.secret, Iron.defaults))
  }
}
