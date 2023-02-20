import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Contact } from '@prisma/client';
import { ClientUpdateRequest } from 'src/interfaces/client.interface';
import {
  ContactRequest,
  GetOneContact,
} from 'src/interfaces/contact.interface';
import { CreateContactService } from 'src/services/contact/create.contact.service';
import { DeleteContactService } from 'src/services/contact/delete.contact.service';
import { GetAllContactClientService } from 'src/services/contact/getAll.contact.service';
import { GetAllContactsService } from 'src/services/contact/getAll.service';
import { GetOneContactService } from 'src/services/contact/getOne.contact.service';
import { UpdateContactService } from 'src/services/contact/update.contact.service';

@Controller('/contacts')
export class ContactController {
  constructor(
    private readonly createContactService: CreateContactService,
    private readonly getAllContactsService: GetAllContactsService,
    private readonly getContactManyService: GetAllContactClientService,
    private readonly getOneContactService: GetOneContactService,
    private readonly updateContactService: UpdateContactService,
    private readonly deleteContactService: DeleteContactService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/clients/:id')
  public create(
    @Body() body: ContactRequest,
    @Param('id') id: string,
    @Request() req,
  ): Promise<Contact> {
    const idToken = req.user.sub;

    const newContact = this.createContactService.createContact(
      id,
      body,
      idToken,
    );

    return newContact;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  public getAllContacts(): Promise<Contact[]> {
    const contacts = this.getAllContactsService.getAllContacts();

    return contacts;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/clients/:id')
  public getAllContactClient(
    @Param('id') id: string,
    @Request() req,
  ): Promise<Contact[]> {
    const idToken = req.user.sub;

    const contacts = this.getContactManyService.getAllContactClient(
      id,
      idToken,
    );

    return contacts;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':contactId/clients/:clientId')
  public async getOne(
    @Param('contactId') contactId: string,
    @Param('clientId') clientId: string,
    @Request() req,
  ): Promise<GetOneContact> {
    const idToken = req.user.sub;

    const contact = await this.getOneContactService.getOneContact(
      contactId,
      clientId,
      idToken,
    );

    return contact;
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':contactId/clients/:clientId')
  public async update(
    @Param('contactId') contactId: string,
    @Param('clientId') clientId: string,
    @Request() req,
    @Body() request: ClientUpdateRequest,
  ): Promise<Contact> {
    const idToken = req.user.sub;

    const contact = await this.updateContactService.updateContact(
      contactId,
      clientId,
      request,
      idToken,
    );

    return contact;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':contactId/clients/:clientId')
  public async delete(
    @Param('contactId') contactId: string,
    @Param('clientId') clientId: string,
    @Request() req,
  ): Promise<object> {
    const idToken = req.user.sub;

    return await this.deleteContactService.deleteContact(
      contactId,
      clientId,
      idToken,
    );
  }
}
