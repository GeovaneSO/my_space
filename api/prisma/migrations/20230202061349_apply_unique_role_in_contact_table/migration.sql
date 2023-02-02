/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "contacts_clientId_key" ON "contacts"("clientId");
