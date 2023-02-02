import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ContactInformationResponse,
  InformationRequest,
} from 'src/interfaces/information.interface';
import { CreateInformationClientService } from 'src/services/contact_information/create.information.client.service';
import { CreateInformationContactService } from 'src/services/contact_information/create.information.contact.service';
import { DeleteInformationClientService } from 'src/services/contact_information/delete.information.client.service';
import { DeleteInformationContactService } from 'src/services/contact_information/delete.information.contact.service';
import { GetAllInformationClientService } from 'src/services/contact_information/getAll.information.client.service';
import { GetAllInformationContactService } from 'src/services/contact_information/getAll.information.contact.service';
import { GetOneInformationClientService } from 'src/services/contact_information/getOne.information.client.service';
import { GetOneInformationContactService } from 'src/services/contact_information/getOne.information.contact.service';

@Controller('/information')
export class ContactInformationController {
  constructor(
    private readonly createInformationClientService: CreateInformationClientService,
    private readonly getOneInformationClientService: GetOneInformationClientService,
    private readonly getAllInformationClientService: GetAllInformationClientService,
    private readonly deleteInformationClientService: DeleteInformationClientService,
    private readonly createInformationContactService: CreateInformationContactService,
    private readonly getOneInformationContactService: GetOneInformationContactService,
    private readonly getAllInformationContactService: GetAllInformationContactService,
    private readonly deleteInformationContactService: DeleteInformationContactService,
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
    return await this.getAllInformationClientService.getAllInformationClient(
      id,
    );
  }

  @Delete(':informationId/clients/:clientId')
  public async deleteInformationClient(
    @Param('informationId') informationId: string,
    @Param('clientId') clientId: string,
  ): Promise<object> {
    return await this.deleteInformationClientService.deleteInformationClient(
      informationId,
      clientId,
    );
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

  @Delete(':informationId/contacts/:contactId')
  public async deleteInformationContact(
    @Param('informationId') informationId: string,
    @Param('contactId') contactId: string,
  ): Promise<object> {
    return await this.deleteInformationContactService.deleteInformationContact(
      informationId,
      contactId,
    );
  }
}
