import { Injectable } from '@nestjs/common'

import * as Iron from '@hapi/iron'

@Injectable()
export class CryptoService {
  private secret: string

  constructor() {
    this.secret = process.env.CRYPTO_SECRET
  }

  async ironEncrypt(data: any): Promise<string> {
    const token = await Iron.seal(data, this.secret, Iron.defaults)
    return token
  }

  async ironDecrypt(token: string): Promise<any> {
    const data = await Iron.unseal(token, this.secret, Iron.defaults)
    return data
  }
}
