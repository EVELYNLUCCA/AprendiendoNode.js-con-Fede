const express = require('express');
const path = require('path');
const router = express.Router();

/* inicializaciones -> ejecutar funciones */

require('./mongodb');
const app = express();

/* -------------------------------------- */

/* middlewares -> es un intermediario entre el cliente y el servidor
antes de que cualquier petición llegue al servidor, pasa por un middlewares
para usar middlewares, se utiliza el método use.*/

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); 
/* middleware para indicarle a nodejsdonde van a estar los 
archivos estáticos (archivos del frontend) */

/* ----------------------------------------------------------------------- */

/* routes */
app.use('/api', require(path.join(__dirname, 'routes', 'api.routes'))); /* para usar el enrutador, el primer parámetro es la "ruta raíz", el segundo es el enrutador */
app.use('/usuario', require(path.join(__dirname, 'routes', 'usuario.routes.js')));
app.use('/proyectos', require(path.join(__dirname, 'routes', 'proyectos.routes')));
app.use('/educacion', require(path.join(__dirname, 'routes', 'educacion.routes.js')));

router.get('/', (req, res) => {
    res.render('./public/index.html')
}) /* usamos un router solo para localhost:4000 y mandamos a renderizar el html principal. */
/* ----- */

app.listen(4000, () => {
    console.log('servidor escuchando el puerto 4000')
});