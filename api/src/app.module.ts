import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiService, AppService } from './app.service';
import { ClientModule } from './modules/client.module';
import { ContactModule } from './modules/contact.module';
import { ContactInformationModule } from './modules/contact_information.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [ClientModule, ContactModule, ContactInformationModule, AuthModule],
  controllers: [AppController],
  providers: [ApiService, AppService],
})
export class AppModule {}
