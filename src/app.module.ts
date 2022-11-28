import { Module } from '@nestjs/common';
import { AuthCryptoModule } from './auth-crypto/auth-crypto.module';
import { FindClientModule } from './find-client/find-client.module';

@Module({
  imports: [AuthCryptoModule, FindClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
