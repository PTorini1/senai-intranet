const router = require('express').Router()
const classificados = require('../models/classificados')

router.get("/", async(req, res) => {
    //extrair dados da requisição
    try{
        const listaClassificado = await classificados.find()

        res.render('classificados', {listaClassificado}) 
    }catch(error){
        res.status(500).json({error:error})
    }
})

//Delete - deletar dados
router.delete("/:id", async(req,res) =>{
    try{
        await classificados.deleteOne({_id: id})
    }catch(error){
        res.status(500).json({error:error})
    }
})

module.exports = router