import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { ApiService } from 'src/app.service';
import {
  ContactInformationResponse,
  InformationRequest,
} from 'src/interfaces/information.interface';

@Injectable()
export class CreateInformationClientService {
  constructor(private prisma: ApiService) {}

  async createInformationClient(
    clientId: string,
    dataRequest: InformationRequest,
    idToken: string,
  ): Promise<ContactInformationResponse> {
    const { email, phone } = dataRequest;

    const client: Client = await this.prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!client) {
      throw new HttpException('Invalid client id', HttpStatus.NOT_FOUND);
    }

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

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

    if (informationByPhone || informationByEmail) {
      const messagePhone = `email: ${
        (informationByPhone && informationByPhone.email) ||
        (informationByEmail && informationByEmail.email)
      } and phone: ${
        (informationByPhone && informationByPhone.phone) ||
        (informationByEmail && informationByEmail.phone)
      } already exists`;

      throw new HttpException(messagePhone, HttpStatus.CONFLICT);
    }

    const newClient: ContactInformationResponse =
      await this.prisma.contactInformation.create({
        data: {
          phone,
          email,
          client: {
            connect: {
              id: clientId,
            },
          },
        },
        select: {
          id: true,
          email: true,
          phone: true,
          create_at: true,
          clientId: false,
          contactId: false,
          client: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

    return newClient;
  }
}
