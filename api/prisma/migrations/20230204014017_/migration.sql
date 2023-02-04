/*
  Warnings:

  - Made the column `contactId` on table `contact_informations` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "contact_informations" ALTER COLUMN "contactId" SET NOT NULL;
