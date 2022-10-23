const mongoose = require('mongoose')
const classificados = mongoose.model('classificados', {
    nomeVendedor: String,
    tel: Number,
    email: String,
    nomeProduto: String,
    precoProduto: Number,
    data: String,
    descricao: String,
    status_venda: Boolean
})

module.exports = classificados