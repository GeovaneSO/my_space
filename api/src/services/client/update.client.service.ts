import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
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
    idToken: string,
  ): Promise<ClientWithout> {
    const { name, password, avatarUrl } = dataRequest;

    const clientExist = await this.prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!clientExist) {
      throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    }

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return await this.prisma.client.update({
      where: {
        id: clientId,
      },
      data: {
        avatarUrl: avatarUrl ? avatarUrl : clientExist.avatarUrl,
        name: name ? name : clientExist.name,
        password: password
          ? await bcryptjs.hash(password, 10)
          : clientExist.password,
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
