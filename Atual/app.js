const express = require('express')
var favicon = require('serve-favicon');
var path = require('path')
const app = express()

app.set('view engine', 'ejs')

app.get("/home", async(req, res) => {
    res.render("home");
})

app.get("/classificados", async(req, res) => {
    res.render("classificados");
})

app.get("/home", async(req, res) => {
    res.render("home");
})

app.use(express.static(__dirname + '/public'));
/* app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))) */


app.listen(8080, () => {
    console.log("Servidor inicial na porta 8080 http://localhost:8080")
})
