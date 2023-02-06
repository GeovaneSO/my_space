import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { ApiService } from 'src/app.service';
import { GetClientContact } from 'src/interfaces/contact.interface';

@Injectable()
export class GetAllContactClientService {
  constructor(private prisma: ApiService) {}

  async getAllContactClient(
    clientId: string,
    idToken: string,
  ): Promise<Contact[]> {
    const contacts: GetClientContact = await this.prisma.client.findUnique({
      where: {
        id: clientId,
      },
      select: {
        update_at: true,
        contact: {
          select: {
            id: true,
            name: true,
            create_at: true,
            update_at: true,
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
        },
      },
    });

    if (!contacts) {
      throw new HttpException('Invalid id', HttpStatus.NOT_FOUND);
    }

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return contacts.contact;
  }
}
