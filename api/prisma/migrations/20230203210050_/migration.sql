/*
  Warnings:

  - Made the column `clientId` on table `client_contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contactId` on table `client_contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "client_contact" ALTER COLUMN "clientId" SET NOT NULL,
ALTER COLUMN "contactId" SET NOT NULL;
