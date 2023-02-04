/*
  Warnings:

  - You are about to drop the column `firstName` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `contacts` table. All the data in the column will be lost.
  - Added the required column `update_at` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_clientId_fkey";

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "clientId",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "client_contact" (
    "id" TEXT NOT NULL,
    "clientId" TEXT,
    "contactId" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "client_contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClientToContact" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToContact_AB_unique" ON "_ClientToContact"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToContact_B_index" ON "_ClientToContact"("B");

-- AddForeignKey
ALTER TABLE "client_contact" ADD CONSTRAINT "client_contact_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_contact" ADD CONSTRAINT "client_contact_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToContact" ADD CONSTRAINT "_ClientToContact_A_fkey" FOREIGN KEY ("A") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToContact" ADD CONSTRAINT "_ClientToContact_B_fkey" FOREIGN KEY ("B") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
