const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Traemos mongoose, y su clase Schema

const projectSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    url: {
        required: true,
        type: String
    },
    imageUrl: {
        required: true,
        type: String
    }
});

// Creamos un Schema con todos los datos que va a tener el objeto

const projectModel = mongoose.model('project', projectSchema);
//Creamos el modelo, como primer parámetro va el nombre de la coleccion (en singular)
//Y segundo, el schema

module.exports = projectModel;
