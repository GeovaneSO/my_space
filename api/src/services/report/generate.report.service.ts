import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import PDFDocument from 'pdfkit-table';
import { ApiService } from 'src/app.service';

@Injectable()
export class ClientReportContactsService {
  constructor(private prisma: ApiService) {}

  async clientReportContacts(clientId: string): Promise<Buffer> {
    const client = await this.prisma.client.findUnique({
      where: {
        id: clientId,
      },
    });

    if (!client) {
      throw new HttpException('Invalid client id', HttpStatus.NOT_FOUND);
    }
    const clientContactsArray = await this.prisma.client.findMany({
      where: {
        id: client.id,
      },
      select: {
        contact: {
          select: {
            name: true,
            contactInformation: {
              select: {
                email: true,
                phone: true,
              },
            },
          },
        },
      },
    });

    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        size: 'LETTER',
        bufferPages: true,
        displayTitle: true,
        info: {
          Title: 'Report.pdf',
          CreationDate: new Date(),
        },
      });

      let pageNumber = 0;

      doc.on('pagedAdded', () => {
        pageNumber++;

        pageNumber > 1 &&
          doc
            .moveTo(50, 55)
            .lineTo(doc.page.width - 50, 55)
            .stroke();

        const bottom = doc.page.margins.bottom;

        doc.page.margins.bottom = 0;
        doc.text(
          `Pag. ${pageNumber}`,
          (doc.page.width - 100) / 2,
          doc.page.height - 50,
          { width: 100, align: 'center', lineBreak: false },
        );
        doc.page.margins.bottom = bottom;
      });

      doc.font('Helvetica-Bold').fontSize(18);
      doc.text('', 40, 40);
      doc.text(`${client.name} customer contacts report`, {
        // width
        align: 'center',
      });

      let counter = 0;

      const infoRow = clientContactsArray[0].contact.map(
        (clientContact, index) => {
          counter++;

          if (index <= counter) {
            return [
              clientContact.name,
              clientContact.contactInformation[0].email,
              clientContact.contactInformation[0].phone,
            ];
          }
        },
      );

      const table = {
        title: 'Contacts report',
        subtitle: '',
        headers: ['name', 'email', 'phone'],
        rows: infoRow,
      };

      doc.text('', 100, 100);

      doc.table(table, {
        columnsSize: [150, 150, 120],
        columnSpacing: 10,
      });

      doc.font('Helvetica', 8);
      doc.text(`Report created at ${new Date()}`, { goTo: 'finish' });

      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => {
        const data = Buffer.concat(buffer);
        resolve(data);
      });
      doc.end();
    });

    return pdfBuffer;
  }
}
