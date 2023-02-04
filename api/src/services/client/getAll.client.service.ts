import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { GetClient } from 'src/interfaces/client.interface';

@Injectable()
export class GetClientService {
  constructor(private prisma: ApiService) {}

  async getClientAll(): Promise<GetClient[]> {
    return await this.prisma.client.findMany({
      select: {
        id: true,
        name: true,
        username: true,
        avatarUrl: true,
        create_at: true,
        password: false,
        contact: {
          select: {
            id: true,
            name: true,
          },
        },
        contactInformation: {
          select: {
            id: true,
            email: true,
            phone: true,
          },
        },
      },
    });
  }
}
