const router = require('express').Router()
const classificados = require('../models/classificados')

router.post("/", async(req, res) => {
    console.log(req.body); // o conteúdo do corpo do formulário

    const {nomeVendedor, tel,email,nomeProduto,precoProduto,data,descricao,status_venda} = req.body

    const cadastro = {
        nomeVendedor, tel,email,nomeProduto,precoProduto,data,descricao,status_venda
    }

    if(!nomeVendedor){
        res.status(422).json({error: 'O nome é obrigatório!'})
    }

    try{
        await classificados.create(cadastro)
        res.send('Produto cadastrado com sucesso!')
    }catch(error){
        res.status(500).json({error: error})
    }
})

router.get("/", async(req, res) => {
    try{
        const elementos = await classificados.find()
        res.status(200).json(elementos)
    }catch(error){
        res.status(500).json({error: error})
    }
})

module.exports = router