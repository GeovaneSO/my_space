import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { ContactInformationResponse } from 'src/interfaces/information.interface';

@Injectable()
export class GetOneInformationService {
  constructor(private prisma: ApiService) {}

  async getOneInformation(
    informationId: string,
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
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    return information;
  }
}
