import {
  Body,
  Param,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
} from '@nestjs/common';
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

@Controller('/clients')
export class ClientController {
  constructor(
    private readonly createClientService: ClientService,
    private readonly getClientManyService: GetClientService,
    private readonly getOneClientService: GetOneClientService,
    private readonly updateClientService: UpdateClientService,
    private readonly deleteClientService: DeleteClientService,
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
}
