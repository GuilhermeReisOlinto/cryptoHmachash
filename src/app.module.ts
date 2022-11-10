import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthCryptoModule } from './auth-crypto/auth-crypto.module';

@Module({
  imports: [AuthCryptoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
