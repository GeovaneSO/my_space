import { Module } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { ContactInformationController } from 'src/controllers/contact_information/contact_information.controller';
import { CreateInformationClientService } from 'src/services/contact_information/create.information.client.service';
import { CreateInformationContactService } from 'src/services/contact_information/create.information.contact.service';
import { GetAllInformationClientService } from 'src/services/contact_information/getAll.information.client.service';
import { GetAllInformationContactService } from 'src/services/contact_information/getAll.information.contact.service';
import { GetOneInformationClientService } from 'src/services/contact_information/getOne.information.client.service';
import { GetOneInformationContactService } from 'src/services/contact_information/getOne.information.contact.service';

@Module({
  imports: [],
  controllers: [ContactInformationController],
  providers: [
    GetOneInformationClientService,
    CreateInformationClientService,
    GetAllInformationClientService,
    GetOneInformationContactService,
    CreateInformationContactService,
    GetAllInformationContactService,
    ApiService,
  ],
})
export class ContactInformationModule {}
