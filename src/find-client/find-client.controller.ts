import { Body, Controller, Post } from '@nestjs/common';
import { AuthCryptoService } from 'src/auth-crypto/auth-crypto.service';
import { Client_Dto } from './client.dto/client.dto';
import { FindClientService } from './find-client.service';

@Controller('find-client')
export class FindClientController {
    constructor(
        private findClientService: FindClientService,
       
        ) {}
    
    @Post()
    async find_Client(@Body() body: Client_Dto){
        return this.findClientService.find_Client(body)
    }
}
