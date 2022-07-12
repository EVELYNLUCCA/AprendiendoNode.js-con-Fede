const express = require('express');
const app = express();
const routerIndex = require('./routes/index.routes');

const port = 4000 | 4001 | 4002 | 4003;

app.use('/api', routerIndex);

app.listen(port, () => {
    console.log('Servidor escuchando el puerto', port);
});