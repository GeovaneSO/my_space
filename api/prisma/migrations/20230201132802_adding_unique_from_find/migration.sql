/*
  Warnings:

  - A unique constraint covering the columns `[username,id]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,email,phone,clientId,contactId]` on the table `contact_informations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username,id]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "firstname" TEXT,
ADD COLUMN     "lastname" TEXT;

-- AlterTable
ALTER TABLE "contacts" ADD COLUMN     "firstname" TEXT,
ADD COLUMN     "lastname" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "clients_username_id_key" ON "clients"("username", "id");

-- CreateIndex
CREATE UNIQUE INDEX "contact_informations_id_email_phone_clientId_contactId_key" ON "contact_informations"("id", "email", "phone", "clientId", "contactId");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_username_id_key" ON "contacts"("username", "id");
