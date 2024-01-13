/*
  Warnings:

  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Type";

-- CreateTable
CREATE TABLE "CameraType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "CameraType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CameraType_name_key" ON "CameraType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CameraType_slug_key" ON "CameraType"("slug");
