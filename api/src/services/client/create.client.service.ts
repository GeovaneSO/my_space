import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { ClientRequest, GetClient } from 'src/interfaces/client.interface';

@Injectable()
export class ClientService {
  constructor(private prisma: ApiService) {}

  async createClient(dataRequest: ClientRequest): Promise<GetClient> {
    if (!dataRequest.email && !dataRequest.phone) {
      return this.prisma.client.create({ data: dataRequest });
    }
    const { email, phone, name, password, username, avatarUrl } = dataRequest;

    const usernameExists = await this.prisma.client.findUnique({
      where: { username },
    });

    const informationByPhone = await this.prisma.contactInformation.findUnique({
      where: {
        phone,
      },
    });

    const informationByEmail = await this.prisma.contactInformation.findUnique({
      where: {
        email,
      },
    });

    if (usernameExists || informationByPhone || informationByEmail) {
      const messageUsername = `username ${usernameExists?.username} already exists`;

      const messagePhone = `email: ${
        (informationByPhone && informationByPhone.email) ||
        (informationByEmail && informationByEmail.email)
      } and phone: ${
        (informationByPhone && informationByPhone.phone) ||
        (informationByEmail && informationByEmail.phone)
      } already exists`;

      throw new HttpException(
        (usernameExists && messageUsername) || messagePhone,
        HttpStatus.CONFLICT,
      );
    }

    const newClient: GetClient = await this.prisma.client.create({
      data: {
        name,
        password,
        username,
        avatarUrl,
        contactInformation: {
          create: {
            email: email,
            phone: phone,
          },
        },
      },
      select: {
        id: true,
        name: true,
        username: true,
        firstName: true,
        lastName: true,
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
            email: true,
            phone: true,
            id: true,
          },
        },
      },
    });

    return newClient;
  }
}