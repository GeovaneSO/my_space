/*
  Warnings:

  - A unique constraint covering the columns `[email,phone]` on the table `contact_informations` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "clients_username_id_key";

-- DropIndex
DROP INDEX "contact_informations_id_email_phone_key";

-- DropIndex
DROP INDEX "contacts_username_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "contact_informations_email_phone_key" ON "contact_informations"("email", "phone");
