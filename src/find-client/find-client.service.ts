import { BadRequestException, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { AuthCryptoService } from 'src/auth-crypto/auth-crypto.service';

@Injectable()
export class FindClientService {
   constructor( private authCryptoService: AuthCryptoService){}

    async find_Client ( body ){

        try {
            
            const payload_crypt = await this.authCryptoService.authService(body);
            console.log("payload: ", payload_crypt)

        } catch (error) {
            throw new BadRequestException(error.response)
        }

    }
}
