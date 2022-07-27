const express = require('express');
const router = express.Router(); /* creamos el enrutador con el método Router*/

router.get('/', (req, res) => {
    res.send('hola')
})

module.exports = router;