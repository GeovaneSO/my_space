import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { ContactInformationResponse } from 'src/interfaces/information.interface';

@Injectable()
export class GetAllInformationClientService {
  constructor(private prisma: ApiService) {}

  async getAllInformationClient(
    clientId: string,
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
    console.log(information);

    if (!information) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    return information;
  }
}