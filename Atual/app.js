const express = require('express')
const app = express()
const db = require('./models/db')

app.set('view engine', 'ejs')

app.get("/", async(req, res) => {
    res.render("home");
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

app.use(express.static(__dirname + '/public'));
/* app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))) */


app.listen(8080, () => {
    console.log("Servidor inicial na porta 8080 http://localhost:8080")
})
