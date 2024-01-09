/*
  Warnings:

  - A unique constraint covering the columns `[name,slug]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,slug]` on the table `Camera` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,slug]` on the table `Type` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_slug_key" ON "Brand"("name", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Camera_name_slug_key" ON "Camera"("name", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_slug_key" ON "Type"("name", "slug");
