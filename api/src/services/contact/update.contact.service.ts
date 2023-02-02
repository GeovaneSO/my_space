import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { ApiService } from 'src/app.service';
import { ContactUpdateRequest } from 'src/interfaces/contact.interface';

@Injectable()
export class UpdateContactService {
  constructor(private prisma: ApiService) {}

  async updateContact(
    contactId: string,
    dataRequest: ContactUpdateRequest,
  ): Promise<Contact> {
    const contactExist = await this.prisma.contact.findUnique({
      where: { id: contactId },
    });

    if (!contactExist) {
      throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    }

    return await this.prisma.contact.update({
      where: {
        id: contactId,
      },
      data: {
        firstName: dataRequest.firstName
          ? dataRequest.firstName
          : contactExist.firstName,
        lastName: dataRequest.lastName
          ? dataRequest.lastName
          : contactExist.lastName,
        avatarUrl: dataRequest.avatarUrl
          ? dataRequest.avatarUrl
          : contactExist.avatarUrl,
        name: dataRequest.name ? dataRequest.name : contactExist.name,
      },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        create_at: true,
        firstName: true,
        lastName: true,
        clientId: true,
      },
    });
  }
}
