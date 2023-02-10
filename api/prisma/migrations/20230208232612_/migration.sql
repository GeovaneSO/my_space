/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `tasks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "name" VARCHAR(150) NOT NULL;

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "description" VARCHAR(200) NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "title" VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_title_key" ON "tasks"("title");
