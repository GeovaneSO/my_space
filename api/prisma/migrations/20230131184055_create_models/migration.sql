-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "username" VARCHAR(150) NOT NULL,
    "password" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "username" VARCHAR(150) NOT NULL,
    "password" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_informations" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,

    CONSTRAINT "contact_informations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contact_informations_email_key" ON "contact_informations"("email");

-- CreateIndex
CREATE UNIQUE INDEX "contact_informations_phone_key" ON "contact_informations"("phone");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_informations" ADD CONSTRAINT "contact_informations_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_informations" ADD CONSTRAINT "contact_informations_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
