import { Body, Controller, Post } from '@nestjs/common';
import { AuthCryptoService } from './auth-crypto.service';

@Controller('auth-crypto')
export class AuthCryptoController {
    constructor(
        private authCryptoService: AuthCryptoService,
    ){}

    @Post()
    async auth (@Body()body: string){
        return this.authCryptoService.authService(body)
    } 
}
