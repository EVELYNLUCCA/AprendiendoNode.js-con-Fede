const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/proyectos.controller');
//Traemos el modelo.

router.get('/', ProjectController.getAllProjects);

router.get('/:id', ProjectController.getOneProject);

router.post('/', ProjectController.postProject);

router.put('/:id', ProjectController.putProject);

router.delete('/:id', ProjectController.deleteProject);
// En esta función primero create el proyecto en una variable, y después lo guardamos (con await)

module.exports = router;