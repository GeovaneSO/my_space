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
    idToken: string,
  ): Promise<Contact> {
    const { name, avatarUrl, email, phone } = dataRequest;

    const client = await this.prisma.client.findUnique({
      where: { id: clientId },
      include: {
        contacts: {
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

    if (clientId !== idToken) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }
    const informationByPhone = await this.prisma.contactInformation.findUnique({
      where: {
        phone,
      },
      select: {
        phone: true,
        email: true,
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
        email: true,
        phone: true,
        contact: {
          select: {
            id: true,
          },
        },
      },
    });
    const contactNameExists = await this.prisma.contact.findFirst({
      where: { name: name },
      include: {
        clients: {
          where: {
            id: client.id,
          },
        },
        contactInformations: true,
      },
    });

    if (!contactNameExists) {
      if (informationByPhone || informationByEmail) {
        const message = `email: ${
          (informationByPhone && informationByPhone.email) ||
          (informationByEmail && informationByEmail.email)
        } and phone: ${
          (informationByPhone && informationByPhone.phone) ||
          (informationByEmail && informationByEmail.phone)
        } already exists`;

        throw new HttpException(message, HttpStatus.CONFLICT);
      }

      const newContact: Contact = await this.prisma.contact.create({
        data: {
          name,
          avatarUrl: avatarUrl ? avatarUrl : 'found',
          clients: {
            connect: {
              id: client.id,
            },
          },
          contactInformations: {
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
          clientContacts: {
            create: {
              clientId: client.id,
            },
          },
        },
        include: {
          contactInformations: {
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

    if (contactNameExists.clients.find((client) => client.id === clientId)) {
      throw new HttpException(
        'The customer already has the contact',
        HttpStatus.CONFLICT,
      );
    }

    if (
      contactNameExists &&
      (informationByPhone === null || informationByEmail === null)
    ) {
      if (informationByPhone || informationByEmail) {
        const message = `email: ${
          (informationByPhone && informationByPhone.email) ||
          (informationByEmail && informationByEmail.email)
        } and phone: ${
          (informationByPhone && informationByPhone.phone) ||
          (informationByEmail && informationByEmail.phone)
        } already exists`;

        throw new HttpException(message, HttpStatus.CONFLICT);
      }

      await this.prisma.contactInformation.create({
        data: {
          email,
          phone,
          contact: {
            connect: { id: contactNameExists.id },
          },
        },
      });

      await this.prisma.client.update({
        where: {
          id: clientId,
        },
        data: {
          contacts: {
            connect: {
              id: contactNameExists.id,
            },
          },
        },
      });

      return contactNameExists;
    }

    if (contactNameExists && informationByPhone && informationByEmail) {
      if (
        informationByPhone.contact.id === contactNameExists.id &&
        informationByEmail.contact.id === contactNameExists.id
      ) {
        await this.prisma.client.update({
          where: {
            id: clientId,
          },
          data: {
            contacts: {
              connect: {
                id: contactNameExists.id,
              },
            },
          },
        });

        return contactNameExists;
      }
      const message = `email: ${
        (informationByPhone && informationByPhone.email) ||
        (informationByEmail && informationByEmail.email)
      } and phone: ${
        (informationByPhone && informationByPhone.phone) ||
        (informationByEmail && informationByEmail.phone)
      } it's not the contact`;

      throw new HttpException(message, HttpStatus.CONFLICT);
    }
  }
}
