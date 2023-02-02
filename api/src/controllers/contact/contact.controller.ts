import {
  Body,
  Param,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
} from '@nestjs/common';
import { Contact } from '@prisma/client';
import { ClientUpdateRequest } from 'src/interfaces/client.interface';
import { ContactRequest, GetContact } from 'src/interfaces/contact.interface';
import { CreateContactService } from 'src/services/contact/create.contact.service';
import { DeleteContactService } from 'src/services/contact/delete.contact.service';
import { GetAllContactClientService } from 'src/services/contact/getAll.contact.service';
import { GetOneContactService } from 'src/services/contact/getOne.contact.service';
import { UpdateContactService } from 'src/services/contact/update.contact.service';

@Controller('/contacts')
export class ContactController {
  constructor(
    private readonly createContactService: CreateContactService,
    private readonly getContactManyService: GetAllContactClientService,
    private readonly getOneContactService: GetOneContactService,
    private readonly updateContactService: UpdateContactService,
    private readonly deleteContactService: DeleteContactService,
  ) {}

  @Post(':id')
  public createContact(
    @Body() body: ContactRequest,
    @Param('id') id: string,
  ): Promise<Contact> {
    const newContact = this.createContactService.createContact(id, body);

    return newContact;
  }

  @Get('/clients/:id')
  public getAllContactClient(@Param(':id') id: string): Promise<GetContact[]> {
    const contacts = this.getContactManyService.getAllContactClient(id);
    return contacts;
  }

  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<GetContact> {
    const contact = await this.getOneContactService.getOneContact(id);

    return contact;
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() request: ClientUpdateRequest,
  ): Promise<Contact> {
    const contact = await this.updateContactService.updateContact(id, request);

    return contact;
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<object> {
    return await this.deleteContactService.deleteContact(id);
  }
}
