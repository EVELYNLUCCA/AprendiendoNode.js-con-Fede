const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('api principal');
});

router.get('/users', (req, res) => {
    res.send('api de usuarios');
})

module.exports = router;