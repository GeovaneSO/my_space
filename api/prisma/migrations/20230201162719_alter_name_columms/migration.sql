/*
  Warnings:

  - You are about to drop the column `firstname` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `contacts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "firstname",
DROP COLUMN "lastname",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT;

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "firstname",
DROP COLUMN "lastname",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT;
