import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { ContactInformationResponse } from 'src/interfaces/information.interface';

@Injectable()
export class GetOneInformationContactService {
  constructor(private prisma: ApiService) {}

  async getOneInformationContact(
    informationId: string,
    contactId: string,
  ): Promise<ContactInformationResponse> {
    const information: ContactInformationResponse =
      await this.prisma.contactInformation.findUnique({
        where: {
          id: informationId,
        },
        select: {
          id: true,
          email: true,
          phone: true,
          create_at: true,
          contact: {
            select: {
              id: true,
              name: true,
            },
          },
          client: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

    if (!information) {
      throw new HttpException('Information not found', HttpStatus.NOT_FOUND);
    }

    if (information.contact?.id !== contactId) {
      throw new HttpException('Invalid contact id', HttpStatus.NOT_FOUND);
    }

    return information;
  }
}
