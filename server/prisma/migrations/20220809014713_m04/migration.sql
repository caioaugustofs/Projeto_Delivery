/*
  Warnings:

  - You are about to drop the column `Descricao` on the `Transacoes_Credito_Entregadore` table. All the data in the column will be lost.
  - Added the required column `Data` to the `Transacoes_Credito_Entregadore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Data` to the `Transacoes_Debito_cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transacoes_Credito_Entregadore" DROP COLUMN "Descricao",
ADD COLUMN     "Data" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transacoes_Debito_cliente" ADD COLUMN     "Data" TEXT NOT NULL;
