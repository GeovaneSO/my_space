import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { ContactInformationResponse } from 'src/interfaces/information.interface';

@Injectable()
export class GetOneInformationClientService {
  constructor(private prisma: ApiService) {}

  async getOneInformationClient(
    informationId: string,
    clientId: string,
    idToken: string,
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

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    if (information.client?.id !== clientId) {
      throw new HttpException('Invalid client id', HttpStatus.NOT_FOUND);
    }

    return information;
  }
}
