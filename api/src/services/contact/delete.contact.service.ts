import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';

@Injectable()
export class DeleteContactService {
  constructor(private prisma: ApiService) {}

  async deleteContact(contactId: string, clientId: string): Promise<object> {
    const contactExist = await this.prisma.contact.findUniqueOrThrow({
      where: { id: contactId },
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

    await this.prisma.contact.delete({
      where: {
        id: contactId,
      },
    });
    const message = {
      message: 'Client deleted',
    };
    return message;
  }
}
