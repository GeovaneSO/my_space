import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { ApiService } from 'src/app.service';
import { ContactUpdateRequest } from 'src/interfaces/contact.interface';

@Injectable()
export class UpdateContactService {
  constructor(private prisma: ApiService) {}

  async updateContact(
    contactId: string,
    clientId: string,
    dataRequest: ContactUpdateRequest,
    idToken: string,
  ): Promise<Contact> {
    const { name, avatarUrl } = dataRequest;
    const contactExist = await this.prisma.contact.findUnique({
      where: {
        id: contactId,
      },
      select: {
        contactInformations: true,
        clients: true,
        name: true,
        avatarUrl: true,
      },
    });

    if (!contactExist) {
      throw new HttpException('Invalid contact id', HttpStatus.NOT_FOUND);
    }

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    const client = contactExist.clients.find(
      (client) => client.id === clientId,
    );
    if (!client) {
      throw new HttpException(
        'Invalid id, the client does not own the contact',
        HttpStatus.CONFLICT,
      );
    }

    return await this.prisma.contact.update({
      where: {
        id: contactId,
      },
      data: {
        avatarUrl: avatarUrl ? avatarUrl : contactExist.avatarUrl,
        name: name ? name : contactExist.name,
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        create_at: true,
        update_at: true,
        clients: {
          select: {
            id: true,
          },
        },
      },
    });
  }
}
