/*-------CONEXIÓN A BASE DE DATOS MONGODB--------*/
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
/* traemos mongoose y dotenv, de dotenv ejecutamos el método config. */
 
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.cu2ef.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
//protocolo://host:puerto/nombreBBDD
// Se saca la url que nos da mongodb atlas, y cambiamos por las variables de entorno.
 
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true //Objeto propio de mongoose, que lo pide
})
    .then (e => console.log('base de datos conectada :D'))
    .catch(e => console.log(e));
//ejecutamos el método connect, con una uri como primer parámetro y el objeto de mongodb como segundo
// Es una promesa, asi que hacemos then y catch.

module.exports = mongoose;
// Exportamos mongodb