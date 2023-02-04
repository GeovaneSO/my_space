import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { ContactInformationResponse } from 'src/interfaces/information.interface';

@Injectable()
export class GetAllInformationClientService {
  constructor(private prisma: ApiService) {}

  async getAllInformationClient(
    clientId: string,
    idToken: string,
  ): Promise<ContactInformationResponse[]> {
    const information: ContactInformationResponse[] =
      await this.prisma.contactInformation.findMany({
        where: {
          client: {
            id: clientId,
          },
        },
        select: {
          id: true,
          email: true,
          phone: true,
          create_at: true,
          client: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

    if (information.length === 0) {
      throw new HttpException(
        'Client not have information for contact',
        HttpStatus.NOT_FOUND,
      );
    }

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    if (!information) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    return information;
  }
}
