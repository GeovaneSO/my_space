import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';

@Injectable()
export class DeleteInformationClientService {
  constructor(private prisma: ApiService) {}

  async deleteInformationClient(
    informationId: string,
    clientId: string,
  ): Promise<object> {
    const informationExist =
      await this.prisma.contactInformation.findUniqueOrThrow({
        where: { id: informationId },
        select: {
          client: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

    if (!informationExist) {
      throw new HttpException('Invalid client id', HttpStatus.NOT_FOUND);
    }

    if (informationExist.client.id !== clientId) {
      throw new HttpException(
        'Invalid id, the client does not own the information',
        HttpStatus.CONFLICT,
      );
    }

    await this.prisma.contactInformation.delete({
      where: {
        id: informationId,
      },
    });

    return {
      message: `Contact information by client ${informationExist.client.name} deleted`,
    };
  }
}
