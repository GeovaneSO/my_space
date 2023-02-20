import { Module } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { ContactController } from 'src/controllers/contact/contact.controller';
import { CreateContactService } from 'src/services/contact/create.contact.service';
import { DeleteContactService } from 'src/services/contact/delete.contact.service';
import { GetAllContactClientService } from 'src/services/contact/getAll.contact.service';
import { GetAllContactsService } from 'src/services/contact/getAll.service';
import { GetOneContactService } from 'src/services/contact/getOne.contact.service';
import { UpdateContactService } from 'src/services/contact/update.contact.service';

@Module({
  imports: [],
  controllers: [ContactController],
  providers: [
    GetAllContactsService,
    CreateContactService,
    GetAllContactClientService,
    GetOneContactService,
    UpdateContactService,
    DeleteContactService,
    ApiService,
  ],
})
export class ContactModule {}
