import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ApiService } from 'src/app.service';
import { ClientController } from 'src/controllers/client/client.controller';
import { JwtStrategy } from 'src/services/auth/validate.auth.service';
import { CreateClientService } from 'src/services/client/create.client.service';
import { DeleteClientService } from 'src/services/client/delete.client.service';
import { GetClientService } from 'src/services/client/getAll.client.service';
import { GetOneClientService } from 'src/services/client/getOne.client.service';
import { UpdateClientService } from 'src/services/client/update.client.service';
import { ClientReportContactsService } from 'src/services/report/generate.report.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [ClientController],
  providers: [
    CreateClientService,
    GetClientService,
    GetOneClientService,
    UpdateClientService,
    DeleteClientService,
    ClientReportContactsService,
    JwtStrategy,
    ApiService,
  ],
})
export class ClientModule {}
