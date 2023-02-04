import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiService } from 'src/app.service';

@Injectable()
export class GetOneContactService {
  constructor(private prisma: ApiService) {}

  async getOneContact(contactId: string, clientId: string): Promise<any> {
    const contact = await this.prisma.clientContact.findFirst({
      where: {
        contactId,
      },
    });

    console.log(contact);
    if (!contact) {
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    }
    // if (contact.client.id !== clientId) {
    //   throw new HttpException('Invalid client id', HttpStatus.CONFLICT);
    // }
    return contact;
  }
}
