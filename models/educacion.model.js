const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educacionSchema = new Schema({
    institucion: {
        requiere: true,
        type: String
    },
    titulo: {
        requiere: true,
        type: String
    },
    añoInicio: {
        requiere: true,
        type: String
    },
    añoFin: {
        requiere: true,
        type: String
    }
})

const educacionModel = mongoose.model ('educacion', educacionSchema)

module.exports = educacionModel;