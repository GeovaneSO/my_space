import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';

@Injectable()
export class DeleteContactService {
  constructor(private prisma: ApiService) {}

  async deleteContact(contactId: string): Promise<object> {
    const contact = await this.prisma.contact.findUniqueOrThrow({
      where: { id: contactId },
    });

    if (!contact) {
      throw new HttpException('Invalid id', HttpStatus.NOT_FOUND);
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
