const router = require('express').Router()
const ambiente = require('../models/ambiente')

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;

router.get("/", async(req, res) => {
    //extrair dados da requisição
    const listaAmbiente = await ambiente.find()
    console.log(listaAmbiente)

    try{
        res.render('ambiente', {formattedToday, listaAmbiente}) 
    }catch(error){
        res.status(500).json({error:error})
    }
})

router.post("/", async(req, res) => {
    console.log(req.body)
    const {Professor, Sala,hora_inicial,hora_final, Data} = req.body
    const cadastro = {
        Professor,
        Sala,
        hora_inicial,
        hora_final,
        Data
    }

    if(hora_final < hora_inicial){
        res.status(422).json({error: 'A data final não pode ser maior que a inicial!'})
        return
    }

    if(`${yyyy}-${mm}-${dd}` > Data){
        res.status(422).json({error: 'A data para reserva precisa ser maior que a data atual!'})
        return
    }
    
    try{
        await ambiente.create(cadastro)
        res.render('cadastrado')
    }catch(error){
        res.status(500).json({error:error})
    }
})

//Delete - deletar dados
router.delete("/:id", async(req,res) =>{
    try{
        await ambiente.deleteOne({_id: id})
    }catch(error){
        res.status(500).json({error:error})
    }
})

module.exports = router