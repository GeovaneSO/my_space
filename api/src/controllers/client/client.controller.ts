import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ClientRequest,
  ClientUpdateRequest,
  ClientWithout,
  GetClient,
} from 'src/interfaces/client.interface';
import { CreateClientService } from 'src/services/client/create.client.service';
import { DeleteClientService } from 'src/services/client/delete.client.service';
import { GetClientService } from 'src/services/client/getAll.client.service';
import { GetOneClientService } from 'src/services/client/getOne.client.service';
import { UpdateClientService } from 'src/services/client/update.client.service';
import { ClientReportContactsService } from 'src/services/report/generate.report.service';

@Controller('/clients')
export class ClientController {
  constructor(
    private readonly createClientService: CreateClientService,
    private readonly getClientManyService: GetClientService,
    private readonly getOneClientService: GetOneClientService,
    private readonly updateClientService: UpdateClientService,
    private readonly deleteClientService: DeleteClientService,
    private readonly getReportContactsClientService: ClientReportContactsService,
  ) {}

  @Post()
  public createClient(@Body() request: ClientRequest): Promise<GetClient> {
    const clientData = request;
    console.log(clientData);
    const newClient = this.createClientService.createClient(clientData);

    return newClient;
  }

  @Get()
  public getClientAll(): any {
    const clientMany = this.getClientManyService.getClientAll();
    return clientMany;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  public async getOne(
    @Param('id') id: string,
    @Request() req,
  ): Promise<GetClient> {
    const idToken = req.user.sub;

    const client = await this.getOneClientService.getOneClient(id, idToken);

    return client;
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() request: ClientUpdateRequest,
    @Request() req,
  ): Promise<ClientWithout> {
    const idToken = req.user.sub;

    const client = await this.updateClientService.updateClient(
      id,
      request,
      idToken,
    );
    return client;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  public async delete(
    @Param('id') id: string,
    @Request() req,
  ): Promise<object> {
    const idToken = req.user.sub;

    return await this.deleteClientService.deleteClient(id, idToken);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id/report')
  public async reportContactsClients(
    @Param('id') id: string,
    @Res() res,
    @Request() req,
  ): Promise<void> {
    const idToken = req.user.sub;

    const report =
      await this.getReportContactsClientService.clientReportContacts(
        id,
        idToken,
      );
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=report.pdf',
      'Content-Length': report.length,
    });
    res.end(report);
  }
}
