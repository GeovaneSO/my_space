import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';

@Injectable()
export class DeleteClientService {
  constructor(private prisma: ApiService) {}

  async deleteClient(clientId: string): Promise<object> {
    const client = await this.prisma.client.findUniqueOrThrow({
      where: { id: clientId },
    });

    if (!client) {
      throw new HttpException('Invalid id', HttpStatus.NOT_FOUND);
    }

    await this.prisma.client.delete({
      where: {
        id: clientId,
      },
    });
    const message = {
      message: 'Client deleted',
    };
    return message;
  }
}
