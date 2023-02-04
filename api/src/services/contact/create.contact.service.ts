import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { ApiService } from 'src/app.service';
import { ContactRequest } from 'src/interfaces/contact.interface';

@Injectable()
export class CreateContactService {
  constructor(private prisma: ApiService) {}

  async createContact(
    clientId: string,
    dataRequest: ContactRequest,
  ): Promise<Contact> {
    const { name, avatarUrl, email, phone } = dataRequest;

    const client = await this.prisma.client.findUnique({
      where: { id: clientId },
      include: {
        contact: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!client) {
      throw new HttpException(
        `Invalid id, client not exist.`,
        HttpStatus.NOT_FOUND,
      );
    }
    const contactNameExists = await this.prisma.contact.findFirst({
      where: { name: name },
      include: {
        client: {
          where: {
            id: client.id,
          },
        },
        contactInformation: true,
      },
    });

    const informationByPhone = await this.prisma.contactInformation.findUnique({
      where: {
        phone,
      },
      select: {
        contact: {
          select: {
            id: true,
          },
        },
      },
    });

    const informationByEmail = await this.prisma.contactInformation.findUnique({
      where: {
        email,
      },
      select: {
        contact: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!contactNameExists) {
      const newContact: Contact = await this.prisma.contact.create({
        data: {
          name,
          avatarUrl,
          client: {
            connect: {
              id: client.id,
            },
          },
          contactInformation: {
            connectOrCreate: {
              where: {
                email: email,
              },
              create: {
                email: email,
                phone: phone,
              },
            },
          },
          ClientContact: {
            create: {
              clientId: client.id,
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

    if (contactNameExists.client.find((client) => client.id === clientId)) {
      throw new HttpException(
        'The customer already has the contact',
        HttpStatus.CONFLICT,
      );
    }
    if (
      contactNameExists &&
      informationByPhone.contact.id === contactNameExists.id &&
      informationByEmail.contact.id === contactNameExists.id
    ) {
      await this.prisma.client.update({
        where: {
          id: clientId,
        },
        data: {
          contact: {
            connect: {
              id: contactNameExists.id,
            },
          },
        },
      });

      return contactNameExists;
    }
  }
}
