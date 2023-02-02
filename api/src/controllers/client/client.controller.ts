import {
  Body,
  Param,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import {
  ClientRequest,
  ClientUpdateRequest,
  ClientWithout,
  GetClient,
} from 'src/interfaces/client.interface';
import { ClientService } from 'src/services/client/create.client.service';
import { DeleteClientService } from 'src/services/client/delete.client.service';
import { GetClientService } from 'src/services/client/getAll.client.service';
import { GetOneClientService } from 'src/services/client/getOne.client.service';
import { UpdateClientService } from 'src/services/client/update.client.service';
import { ClientReportContactsService } from 'src/services/report/generate.report.service';

@Controller('/clients')
export class ClientController {
  constructor(
    private readonly createClientService: ClientService,
    private readonly getClientManyService: GetClientService,
    private readonly getOneClientService: GetOneClientService,
    private readonly updateClientService: UpdateClientService,
    private readonly deleteClientService: DeleteClientService,
    private readonly getReportContactsClientService: ClientReportContactsService,
  ) {}

  @Post()
  public createClient(@Body() request: ClientRequest): Promise<GetClient> {
    const clientData = request;

    const newClient = this.createClientService.createClient(clientData);

    return newClient;
  }

  @Get()
  public getClientAll(): any {
    const clientMany = this.getClientManyService.getClientAll();
    return clientMany;
  }

  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<GetClient> {
    const client = await this.getOneClientService.getOneClient(id);

    return client;
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() request: ClientUpdateRequest,
  ): Promise<ClientWithout> {
    const client = await this.updateClientService.updateClient(id, request);
    return client;
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<object> {
    return await this.deleteClientService.deleteClient(id);
  }

  @Get('/:id/report')
  public async reportContactsClients(
    @Param('id') id: string,
    @Res() res,
  ): Promise<void> {
    const report =
      await this.getReportContactsClientService.clientReportContacts(id);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=report.pdf',
      'Content-Length': report.length,
    });
    res.end(report);
  }
}
