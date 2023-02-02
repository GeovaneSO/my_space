import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { Contact } from '@prisma/client';
import { ContactRequest } from 'src/interfaces/contact.interface';

@Injectable()
export class CreateContactService {
  constructor(private prisma: ApiService) {}

  async createContact(
    clientId: string,
    dataRequest: ContactRequest,
  ): Promise<Contact> {
    const { name, avatarUrl, firstName, lastName, email, phone } = dataRequest;

    const contactNameExists = await this.prisma.contact.findUnique({
      where: { name },
    });
    const contactClientIdExists = await this.prisma.contact.findUnique({
      where: { name },
    });

    if (contactNameExists || contactClientIdExists) {
      throw new HttpException(
        `contact name ${name} already exists`,
        HttpStatus.CONFLICT,
      );
    }

    const client = await this.prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!client) {
      throw new HttpException(`Invalid id`, HttpStatus.NOT_FOUND);
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

    const newContact: Contact = await this.prisma.contact.create({
      data: {
        name,
        avatarUrl,
        firstName,
        lastName,
        client: {
          connect: {
            id: clientId,
          },
        },
        contactInformation: {
          create: {
            email: email,
            phone: phone,
          },
        },
      },
      include: {
        contactInformation: {
          select: {
            email: true,
            phone: true,
            id: true,
          },
        },
      },
    });

    return newContact;
  }
}
