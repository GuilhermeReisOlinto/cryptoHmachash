import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as argon2 from 'argon2';
import { AuthVerificationDto } from './auth.dto/auth.dto';

@Injectable()
export class AuthCryptoService {
  async authService(body_req): Promise<string> {

    const mensage = JSON.stringify(body_req);
    console.log(mensage)
    const secret = 'guyi';
    const hash_hmac = crypto
      .createHmac('SHA512-224', secret)
      .update(mensage)
      .digest('hex');

    const hashArgon = await argon2.hash(hash_hmac);

    const dados_login = {
      "uuid_client": 'uuid_client',
      "client_password": hashArgon,
      "request_body": body_req,
    }
    this.login(dados_login)
    return hashArgon;
  }

  async login( dados_login: AuthVerificationDto){
    const password ='guyi';
    const request_body = JSON.stringify(dados_login.request_body);
    const payload_crypt = crypto
      .createHmac('SHA512-224', password)
      .update(request_body)
      .digest('hex');

    const matching_passwords = await argon2.verify(""
      dados_login.client_password,
      payload_crypt,
    );

    if(!matching_passwords) console.log('Inauthorized')

    console.log('Authorized')

    return matching_passwords;
    
  }
}
