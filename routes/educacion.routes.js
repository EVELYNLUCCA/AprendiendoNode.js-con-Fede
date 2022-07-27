const express = require('express');
const educacionController = require('../controllers/educacion.controller');
const router = express.Router();
const EducacionController = require('../controllers/educacion.controller');

router.get('/', EducacionController.getAllEducacion);

router.get('/:id', EducacionController.getOneEducacion);

router.post('/', EducacionController.postEducacion);

router.put('/:id', EducacionController.putEducacion);

router.delete('/:id', EducacionController.deleteEducacion);

module.exports = router;