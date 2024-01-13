/*
  Warnings:

  - Added the required column `typeId` to the `Camera` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Camera" ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Camera" ADD CONSTRAINT "Camera_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "CameraType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
