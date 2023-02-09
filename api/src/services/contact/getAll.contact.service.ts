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
    const client: GetClientContact = await this.prisma.client.findUnique({
      where: {
        id: clientId,
      },
      select: {
        update_at: true,
        contacts: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
            create_at: true,
            update_at: true,
            clients: {
              select: {
                id: true,
                name: true,
              },
            },
            contactInformations: {
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

    if (!client) {
      throw new HttpException('Invalid id', HttpStatus.NOT_FOUND);
    }

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return client.contacts;
  }
}
