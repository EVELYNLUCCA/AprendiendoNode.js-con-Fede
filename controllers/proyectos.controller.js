const Proyecto = require('../models/proyectos.model');
const ProyectoController = { };

ProyectoController.getAllProjects = async (req, res) => {
    try {
        const AllProjects = await Proyecto.find();
        
        res.status(200).send(AllProjects);
    } catch (error) {
        res.status(500).send(error);
    }
};

ProyectoController.getOneProject = async (req, res) => {
    try {
        const id = req.params.id;
        const projectFinded = await Proyecto.findById(id);

        res.status(200).send(projectFinded);
    } catch (error) {
        res.status(500).send(error);
    }
}

ProyectoController.postProject = async (req, res) => {
    try {
        const body = req.body;

        const newProject = new Proyecto(body);
        await newProject.save();

        res.status(201).send(newProject);
    } catch (error) {
        res.status(500).send(error);
    }
}

ProyectoController.putProject = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const ProjectUpdated = await Proyecto.findByIdAndUpdate(id, body);

        res.status(200).send(ProjectUpdated);
    } catch (error) {
        res.status(500).send(error);
    }
}

ProyectoController.deleteProject = async (req, res) => {
    try {
        const id = req.params.id;

        const projectDeleted = await Proyecto.findByIdAndDelete(id);

        res.status(200).send(projectDeleted);
    } catch (error) {
        res.status(500).send(error);
    }
}
//Hacemos una función asíncrona, probamos encontrar los proyectos y mandarlos,
//Sino, tiramos un error.

module.exports = ProyectoController;