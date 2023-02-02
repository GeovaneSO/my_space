import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { GetContact } from 'src/interfaces/contact.interface';

@Injectable()
export class GetAllContactClientService {
  constructor(private prisma: ApiService) {}

  async getAllContactClient(clientId: string): Promise<GetContact[]> {
    const contacts = this.prisma.contact.findMany({
      where: {
        client: {
          id: clientId,
        },
      },
      select: {
        id: true,
        name: true,
        firstName: true,
        lastName: true,
        avatarUrl: true,
        create_at: true,
        client: {
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

    if (!contacts) {
      throw new HttpException('Invalid id', HttpStatus.NOT_FOUND);
    }

    return contacts;
  }
}
