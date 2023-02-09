import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiService, AppService } from './app.service';
import { AuthModule } from './modules/auth.module';
import { ClientModule } from './modules/client.module';
import { ContactModule } from './modules/contact.module';
import { ContactInformationModule } from './modules/contact_information.module';
import { TaskModule } from './modules/task.module';

@Module({
  imports: [
    ClientModule,
    ContactModule,
    ContactInformationModule,
    TaskModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [ApiService, AppService],
})
export class AppModule {}
