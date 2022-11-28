import { Module } from '@nestjs/common';
import { AuthCryptoModule } from 'src/auth-crypto/auth-crypto.module';
import { FindClientController } from './find-client.controller';
import { FindClientService } from './find-client.service';

@Module({
  imports: [AuthCryptoModule],
  controllers: [FindClientController],
  providers: [FindClientService]
})
export class FindClientModule {}
