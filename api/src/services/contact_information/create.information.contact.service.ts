import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { ApiService } from 'src/app.service';
import { ClientRequest } from 'src/interfaces/client.interface';
import { ContactInformationResponse } from 'src/interfaces/information.interface';

@Injectable()
export class CreateInformationContactService {
  constructor(private prisma: ApiService) {}

  async createInformationContact(
    contactId: string,
    dataRequest: ClientRequest,
  ): Promise<ContactInformationResponse> {
    const { email, phone } = dataRequest;

    const contact: Contact = await this.prisma.contact.findUnique({
      where: { id: contactId },
    });

    if (!contact) {
      throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
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
          contact: {
            connect: {
              id: contactId,
            },
          },
        },
        select: {
          id: true,
          email: true,
          phone: true,
          create_at: true,
          contactId: false,
          clientId: false,
          contact: {
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
