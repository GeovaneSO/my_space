import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContactInformationResponse, InformationRequest } from 'src/interfaces/information.interface';
import { CreateInformationClientService } from 'src/services/contact_information/create.information.client.service';
import { CreateInformationContactService } from 'src/services/contact_information/create.information.contact.service';
import { GetAllInformationClientService } from 'src/services/contact_information/getAll.information.client.service';
import { GetAllInformationContactService } from 'src/services/contact_information/getAll.information.contact.service';
import { GetOneInformationService } from 'src/services/contact_information/getOne.information.service';

@Controller('/information')
export class ContactInformationController {
  constructor(
    private readonly getOneInformationService: GetOneInformationService,
    private readonly getAllInformationClientService: GetAllInformationClientService,
    private readonly createInformationClientService: CreateInformationClientService,
    private readonly createInformationContactService: CreateInformationContactService,
    private readonly getAllInformationContactService: GetAllInformationContactService,
  ) {}

  @Get(':id/')
  public async getOneInformation(
    @Param('id') id: string,
  ): Promise<ContactInformationResponse> {
    const informationAll =
      await this.getOneInformationService.getOneInformation(id);

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
