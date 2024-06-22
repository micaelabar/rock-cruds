-- CreateTable
CREATE TABLE "Rock" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "lastSee" TEXT NOT NULL,
    "countlastSee" INTEGER NOT NULL DEFAULT 1,
    "extinct" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rock_name_key" ON "Rock"("name");
