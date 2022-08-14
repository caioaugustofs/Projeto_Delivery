/*
  Warnings:

  - You are about to drop the column `Data_Hora_Entreg` on the `entregas` table. All the data in the column will be lost.
  - Added the required column `Data_Hora_Entrega` to the `entregas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "entregas" DROP COLUMN "Data_Hora_Entreg",
ADD COLUMN     "Data_Hora_Entrega" TEXT NOT NULL;
