import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import {
  ClientUpdateRequest,
  ClientWithout,
} from 'src/interfaces/client.interface';

@Injectable()
export class UpdateClientService {
  constructor(private prisma: ApiService) {}

  async updateClient(
    clientId: string,
    dataRequest: ClientUpdateRequest,
  ): Promise<ClientWithout> {
    const clientExist = await this.prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!clientExist) {
      throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    }

    return await this.prisma.client.update({
      where: {
        id: clientId,
      },
      data: {
        avatarUrl: dataRequest.avatarUrl
          ? dataRequest.avatarUrl
          : clientExist.avatarUrl,
        name: dataRequest.name ? dataRequest.name : clientExist.name,
      },
      select: {
        id: true,
        password: false,
        name: true,
        username: true,
        avatarUrl: true,
        create_at: true,
      },
    });
  }
}
