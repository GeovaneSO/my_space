-- DropForeignKey
ALTER TABLE "contact_informations" DROP CONSTRAINT "contact_informations_clientId_fkey";

-- DropForeignKey
ALTER TABLE "contact_informations" DROP CONSTRAINT "contact_informations_contactId_fkey";

-- AlterTable
ALTER TABLE "contact_informations" ALTER COLUMN "clientId" DROP NOT NULL,
ALTER COLUMN "contactId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "contact_informations" ADD CONSTRAINT "contact_informations_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_informations" ADD CONSTRAINT "contact_informations_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
