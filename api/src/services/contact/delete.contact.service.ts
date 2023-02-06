import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { ApiService } from 'src/app.service';

@Injectable()
export class DeleteContactService {
  constructor(private prisma: ApiService) {}

  async deleteContact(
    contactId: string,
    clientId: string,
    idToken: string,
  ): Promise<object> {
    const contactExist = await this.prisma.contact.findUniqueOrThrow({
      where: { id: contactId },
      select: {
        client: true,
        id: true,
        name: true,
        create_at: true,
      },
    });

    if (!contactExist) {
      throw new HttpException('Invalid contact id', HttpStatus.NOT_FOUND);
    }

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }
    const client = contactExist.client.find((client) => client.id === clientId);

    if (!client) {
      throw new HttpException(
        'Invalid id, the client does not own the contact',
        HttpStatus.CONFLICT,
      );
    }

    await this.prisma.contact.delete({
      where: {
        id: contactId,
      },
    });

    const message = {
      message: 'Contact deleted',
    };

    return message;
  }
}
