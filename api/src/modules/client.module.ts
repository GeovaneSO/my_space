import { Module } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { ClientController } from 'src/controllers/client/client.controller';
import { ClientService } from 'src/services/client/create.client.service';
import { DeleteClientService } from 'src/services/client/delete.client.service';
import { GetClientService } from 'src/services/client/getAll.client.service';
import { GetOneClientService } from 'src/services/client/getOne.client.service';
import { UpdateClientService } from 'src/services/client/update.client.service';
import { ClientReportContactsService } from 'src/services/report/generate.report.service';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [
    ClientService,
    GetClientService,
    GetOneClientService,
    UpdateClientService,
    DeleteClientService,
    ClientReportContactsService,
    ApiService,
  ],
})
export class ClientModule {}
