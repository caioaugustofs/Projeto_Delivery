const express = require('express')
const bcrypt = require('bcryptjs')


const allRoutes = express.Router();
const { PrismaClient } = require('@prisma/client')



const prisma = new PrismaClient();

allRoutes.post('/cadastro', async (req, res) => {
    try {
        const { Nome, Email, Senha, Tipo } = req.body;

        
        let emailUser = await prisma.Cadastro_de_usuarios.findUnique({ where: { Email } })
        
        if (emailUser) { return res.json({ error: 'Email já registrado' }) }

        const hashpassword = await bcrypt.hash(Senha, 10)
        

        const Cadastro = await prisma.Cadastro_de_usuarios.create({
            data: {
                Nome:Nome, Email:Email, Senha:hashpassword, Tipo:Tipo
            }
        })
        return res.status(201).json(Cadastro)

    } catch (error) { return res.json((error)) }
});



allRoutes.get('/cadastro', async (req, res) => {
    const Cadastro = await prisma.Cadastro_de_usuarios.findMany();
    return res.status(200).json(Cadastro)
})


//###################################################################

allRoutes.get('/entregas', async (req, res) => {
    const entrega = await prisma.entregas.findMany();
    return res.status(200).json(entrega)
})


allRoutes.get('/debitocliente', async (req, res) => {

    const result = await prisma.Transacoes_Debito_cliente.findMany();
    return res.status(200).json(result)
})


allRoutes.get('/creditoEntregadore', async (req, res) => {

    const result = await prisma.Transacoes_Credito_Entregadore.findMany();
    return res.status(200).json(result)
})




allRoutes.post('/entregas', async (req, res) => {
    try {
        const {
            Entregador,
            Cliente,
            Valor,
            Descricao,
            Local_Retirada,
            Local_Entrega,
            Data_Criacao,
            Data_Hora_Retirada,
            Data_Hora_Entrega,
            Status } = req.body;

            console.log(req.body)



        const entrega = await prisma.entregas.create({
            data: {
                Entregador,
                Cliente,
                Valor,
                Descricao,
                Local_Retirada,
                Local_Entrega,
                Data_Criacao,
                Data_Hora_Retirada,
                Data_Hora_Entrega,
                Status,
            }
        })


        if (Status === '2'){
            console.log(Status)


            const entregaDebito = await prisma.Transacoes_Debito_cliente.create({
                data: {
                    Data_Transaco: Data_Hora_Entrega,
                    Usuario: Cliente,
                    Valor: Valor
                }
            })

            const entregaCredito = await prisma.Transacoes_Credito_Entregadore.create({
                data: {
                    Data_Transaco: Data_Hora_Entrega,
                    Usuario: Cliente,
                    Valor: Valor
                }
            })

            return res.status(200).json({ entrega ,entregaDebito, entregaCredito })
        }


        return res.status(201).json(entrega)



    } catch (error) {return res.json((error)) }
});





module.exports = allRoutes; 