import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ContactInformationResponse,
  InformationRequest,
} from 'src/interfaces/information.interface';
import { CreateInformationClientService } from 'src/services/contact_information/create.information.client.service';
import { CreateInformationContactService } from 'src/services/contact_information/create.information.contact.service';
import { GetAllInformationClientService } from 'src/services/contact_information/getAll.information.client.service';
import { GetAllInformationContactService } from 'src/services/contact_information/getAll.information.contact.service';
import { GetOneInformationClientService } from 'src/services/contact_information/getOne.information.client.service';
import { GetOneInformationContactService } from 'src/services/contact_information/getOne.information.contact.service';

@Controller('/information')
export class ContactInformationController {
  constructor(
    private readonly getOneInformationClientService: GetOneInformationClientService,
    private readonly getOneInformationContactService: GetOneInformationContactService,
    private readonly getAllInformationClientService: GetAllInformationClientService,
    private readonly createInformationClientService: CreateInformationClientService,
    private readonly createInformationContactService: CreateInformationContactService,
    private readonly getAllInformationContactService: GetAllInformationContactService,
  ) {}

  @Get(':informationId/clients/:clientId')
  public async getOneInformationClient(
    @Param('informationId') informationId: string,
    @Param('clientId') clientId: string,
  ): Promise<ContactInformationResponse> {
    const informationAll =
      await this.getOneInformationClientService.getOneInformationClient(
        informationId,
        clientId,
      );

    return informationAll;
  }

  @Post('clients/:id/')
  public async createInformationClient(
    @Param('id') id: string,
    @Body() body: InformationRequest,
  ): Promise<ContactInformationResponse> {
    const newInformation =
      await this.createInformationClientService.createInformationClient(
        id,
        body,
      );

    return newInformation;
  }

  @Get('/clients/:id/')
  public async getAllInformationClient(
    @Param('id') id: string,
  ): Promise<ContactInformationResponse[]> {
    const informationAll =
      await this.getAllInformationClientService.getAllInformationClient(id);
    return informationAll;
  }

  @Get(':informationId/contacts/:contactId')
  public async getOneInformationContact(
    @Param('informationId') informationId: string,
    @Param('contactId') contactId: string,
  ): Promise<ContactInformationResponse> {
    const informationAll =
      await this.getOneInformationContactService.getOneInformationContact(
        informationId,
        contactId,
      );

    return informationAll;
  }

  @Post('contacts/:id/')
  public async createInformationContact(
    @Param('id') id: string,
    @Body() body: any,
  ): Promise<ContactInformationResponse> {
    const newInformation =
      await this.createInformationContactService.createInformationContact(
        id,
        body,
      );

    return newInformation;
  }

  @Get('/contacts/:id/')
  public async getAllInformationContact(
    @Param('id') id: string,
  ): Promise<ContactInformationResponse[]> {
    const informationAll =
      await this.getAllInformationContactService.getAllInformationContact(id);
    return informationAll;
  }
}
