const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Tabela = new Schema({
    task: {
        type: String,
        require: true
    }
}, {timestamps: true})

const TabelaModel = mongoose.model('Tabela', Tabela)

module.exports = TabelaModel;