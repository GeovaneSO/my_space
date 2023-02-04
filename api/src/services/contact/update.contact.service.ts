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
  ): Promise<Contact> {
    const contactExist = await this.prisma.clientContact.findFirst({
      where: { contactId: contactId },
      select: {
        contact: true,
        clientId: true,
      },
    });

    if (!contactExist) {
      throw new HttpException('Invalid contact id', HttpStatus.NOT_FOUND);
    }

    if (contactExist.clientId !== clientId) {
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
        avatarUrl: dataRequest.avatarUrl
          ? dataRequest.avatarUrl
          : contactExist.contact.avatarUrl,
        name: dataRequest.name ? dataRequest.name : contactExist.contact.name,
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        create_at: true,
        update_at: true,
        client: {
          select: {
            id: true,
          },
        },
      },
    });
  }
}
