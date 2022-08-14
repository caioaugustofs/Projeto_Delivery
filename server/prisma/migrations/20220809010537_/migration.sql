-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entregas" (
    "id" SERIAL NOT NULL,
    "Entregador" TEXT NOT NULL,
    "Cliente" TEXT NOT NULL,
    "Valor" DOUBLE PRECISION NOT NULL,
    "Descricao" TEXT NOT NULL,
    "Local_Retirada" TEXT NOT NULL,
    "Local_Entrega" TEXT NOT NULL,
    "Data_Criacao" TEXT NOT NULL,
    "Data_Hora_Retirada" TEXT NOT NULL,
    "Data_Hora_Entreg" TEXT NOT NULL,
    "Status" TEXT NOT NULL,

    CONSTRAINT "entregas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transacoes_Debito_cliente" (
    "id" SERIAL NOT NULL,
    "Usuario" TEXT NOT NULL,
    "Valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Transacoes_Debito_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transacoes_Credito_Entregadore" (
    "id" SERIAL NOT NULL,
    "Usuario" TEXT NOT NULL,
    "Valor" DOUBLE PRECISION NOT NULL,
    "Descricao" TEXT NOT NULL,

    CONSTRAINT "Transacoes_Credito_Entregadore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo_Email_key" ON "Todo"("Email");
