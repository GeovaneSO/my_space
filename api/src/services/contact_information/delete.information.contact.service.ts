import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiService } from 'src/app.service';

@Injectable()
export class DeleteInformationContactService {
  constructor(private prisma: ApiService) {}

  async deleteInformationContact(
    informationId: string,
    contactId: string,
  ): Promise<object> {
    const informationExist = await this.prisma.contactInformation.findUnique({
      where: { id: informationId },
      select: {
        contact: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!informationExist) {
      throw new HttpException('Invalid contact id', HttpStatus.NOT_FOUND);
    }

    if (informationExist.contact.id !== contactId) {
      throw new HttpException(
        'Invalid id, the contact does not own the information',
        HttpStatus.CONFLICT,
      );
    }

    return {
      message: `Contact information by client ${informationExist.contact.name} deleted`,
    };
  }
}
