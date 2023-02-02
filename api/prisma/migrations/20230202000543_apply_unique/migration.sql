/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `contact_informations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `contact_informations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "contact_informations_email_key" ON "contact_informations"("email");

-- CreateIndex
CREATE UNIQUE INDEX "contact_informations_phone_key" ON "contact_informations"("phone");
