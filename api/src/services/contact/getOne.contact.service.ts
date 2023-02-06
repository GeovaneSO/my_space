import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { GetOneContact } from 'src/interfaces/contact.interface';

@Injectable()
export class GetOneContactService {
  constructor(private prisma: ApiService) {}

  async getOneContact(
    contactId: string,
    clientId: string,
    idToken: string,
  ): Promise<GetOneContact> {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id: contactId,
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        create_at: true,
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

    const client = contact.client.find((client) => client.id === clientId);

    if (!client) {
      throw new HttpException('Invalid client id', HttpStatus.CONFLICT);
    }

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return contact;
  }
}
