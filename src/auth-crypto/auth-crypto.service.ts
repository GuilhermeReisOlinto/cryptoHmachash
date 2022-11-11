import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
@Injectable()
export class AuthCryptoService {
  async authService(body) {
    const mensage = JSON.stringify(body);
    const secret = 'guyi';
    const hash = crypto
      .createHmac('SHA512-224', secret)
      .update(mensage)
      .digest('hex');
    console.log(hash);

    const hashArgon = await argon2.hash(hash);
    console.log(hashArgon)
  }
}
