import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { ContactInformationResponse } from 'src/interfaces/information.interface';

@Injectable()
export class GetAllInformationContactService {
  constructor(private prisma: ApiService) {}

  async getAllInformationContact(
    contactId: string,
  ): Promise<ContactInformationResponse[]> {
    const information: ContactInformationResponse[] =
      await this.prisma.contactInformation.findMany({
        where: {
          contact: {
            id: contactId,
          },
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
        },
      });
    console.log(information);

    if (!information) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    return information;
  }
}
