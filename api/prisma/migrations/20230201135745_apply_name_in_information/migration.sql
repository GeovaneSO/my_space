/*
  Warnings:

  - A unique constraint covering the columns `[id,email,phone]` on the table `contact_informations` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "contact_informations_id_email_phone_clientId_contactId_key";

-- CreateIndex
CREATE UNIQUE INDEX "contact_informations_id_email_phone_key" ON "contact_informations"("id", "email", "phone");
