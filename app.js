const express = require('express')
const app = express()
const mongoose = require('mongoose')
const classificados = require('./models/classificados')

//forma de ler JSON / middlewares
app.use(
    express.urlencoded({ //faz a criptografia da url quando mandamos o form com POST
        extended: true,
    }),
)
app.use(express.json()); 

//setando a pasta public como sendo "static"
app.use(express.static(__dirname + '/public'));

//view engine, distruibuição que estarei utilizando para as views
app.set('view engine', 'ejs');

//rota inicial / endpoint
app.get("/", async(req, res) => {
    res.render("home");
})

app.get("/cadastrar", async(req, res) => {
    res.render("cadastrar");
})

app.post("/cadastrarPost", async(req, res) => {
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
        res.render('cadastrar')
    }catch(error){
        res.status(500).json({error: error})
    }
})

app.get("/classificados", async(req, res) => {
    res.render("classificados");
})

app.get("/cursos", async(req, res) => {
    res.render("cursos");
})

app.get("/FormularioPadrao", async(req, res) => {
    res.render("FormularioPadrao");
})

app.get("/servicos", async(req, res) => {
    res.render("servicos");
})

app.get("/contato", async(req, res) => {
    res.render("contato");
})

app.get("/GestaoQualidade", async(req, res) => {
    res.render("GestaoQualidade");
})

app.get("/areaPedagogica", async(req, res) => {
    res.render("areaPedagogica");
})

app.get("/ti", async(req, res) => {
    res.render("ti");
})

app.get("/DocumentosRegulares", async(req, res) => {
    res.render("DocumentosRegulares");
})

app.get("/sobre", async(req, res) => {
    res.render("about");
})

const DB_PASSWORD = encodeURIComponent('diWS8kF7bXZMjHzD')

mongoose
    .connect(`mongodb+srv://admin:${DB_PASSWORD}@apicluster.sgop9az.mongodb.net/senailivre?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectamos ao MongoDB!")
        //entregar uma porta
        app.listen(1500, () => {
            console.log("Servidor inicial na porta 1500 http://localhost:1500")
        })
    })
    .catch((err) => console.log(err))
