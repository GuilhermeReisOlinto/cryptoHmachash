import { Module } from '@nestjs/common';
import { AuthCryptoService } from './auth-crypto.service';
import { AuthCryptoController } from './auth-crypto.controller';

@Module({
  providers: [AuthCryptoService],
  controllers: [AuthCryptoController]
})
export class AuthCryptoModule {}
