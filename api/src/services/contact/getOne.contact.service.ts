import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { GetContact } from 'src/interfaces/contact.interface';

@Injectable()
export class GetOneContactService {
  constructor(private prisma: ApiService) {}

  async getOneContact(
    contactId: string,
    clientId: string,
  ): Promise<GetContact> {
    const contact: GetContact = await this.prisma.contact.findUnique({
      where: {
        id: contactId,
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        create_at: true,
        firstName: true,
        lastName: true,
        client: {
          select: {
            id: true,
            name: true,
          },
        },
        contactInformation: {
          select: {
            id: true,
            email: true,
            phone: true,
          },
        },
      },
    });
    if (!contact) {
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    }
    if (contact.client.id !== clientId) {
      throw new HttpException('Invalid client id', HttpStatus.CONFLICT);
    }
    return contact;
  }
}
