import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { GetClient } from 'src/interfaces/client.interface';

@Injectable()
export class GetOneClientService {
  constructor(private prisma: ApiService) {}
  async getOneClient(clientId: string, idToken: string): Promise<GetClient> {
    const client: GetClient = await this.prisma.client.findUnique({
      where: {
        id: clientId,
      },
      select: {
        id: true,
        password: false,
        name: true,
        username: true,
        avatarUrl: true,
        create_at: true,
        contacts: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
        contactInformations: {
          select: {
            id: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    if (!client) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return client;
  }
}
