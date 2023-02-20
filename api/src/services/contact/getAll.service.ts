import { Injectable } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { ApiService } from 'src/app.service';
import { GetManyContacts } from 'src/interfaces/contact.interface';

@Injectable()
export class GetAllContactsService {
  constructor(private prisma: ApiService) {}

  async getAllContacts(): Promise<Contact[]> {
    const contacts: GetManyContacts[] = await this.prisma.contact.findMany({
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        create_at: true,
        update_at: true,
        contactInformations: {
          select: {
            id: true,
            email: true,
            phone: true,
          },
        },
        clients: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return contacts;
  }
}
