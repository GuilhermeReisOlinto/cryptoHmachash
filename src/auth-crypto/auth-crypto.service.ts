import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto'
@Injectable()
export class AuthCryptoService {

    async authService(body){
        const mensage = JSON.stringify(body)
        const secret = 'guyi';
        const hash = crypto.createHmac('sha512', secret)
                    .update(mensage)
                    .digest('hex')
        console.log(hash)
    }
}
