const mongoose = require('mongoose')
const ambiente = mongoose.model('ambiente', {
    Professor: String,
    Sala: String,
    hora_inicial: String,
    hora_final: String,
    Data: String
})

module.exports = ambiente