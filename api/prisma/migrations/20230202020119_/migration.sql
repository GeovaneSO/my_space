/*
  Warnings:

  - You are about to drop the column `password` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `contacts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "contacts_username_key";

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "password",
DROP COLUMN "username";

-- CreateIndex
CREATE UNIQUE INDEX "contacts_name_key" ON "contacts"("name");
