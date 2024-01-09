/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Camera` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Camera` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Type` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Brand_name_slug_key";

-- DropIndex
DROP INDEX "Camera_name_slug_key";

-- DropIndex
DROP INDEX "Type_name_slug_key";

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_slug_key" ON "Brand"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Camera_name_key" ON "Camera"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Camera_slug_key" ON "Camera"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_slug_key" ON "Type"("slug");
