const Educacion = require('../models/educacion.model');
const educacionController = { };

educacionController.getAllEducacion = async (req, res) => {
    try {
        const AllEducacion = await Educacion.find();

        res.status(200).send(AllEducacion);
    } catch (error) {
        res.status(500).send(error);
    }
};

educacionController.getOneEducacion = async (req, res) => {
    try {
        const id = req.params.id;
        const EducacionById = await Educacion.findById(id);

        res.status(200).send(EducacionById);
    } catch (error) {
        res.status(500).send(error);
    }
};

educacionController.postEducacion = async (req, res) => {
    try {
        const body = req.body;
        const newEducacion = new Educacion(body);

        await newEducacion.save();

        res.status(201).send("Educacion creada")
    } catch (error) {
        res.status(500).send(error);
    }
}

educacionController.putEducacion = async (req,res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const educacionUpdate = await Educacion.findByIdAndUpdate(id, body);

        res.status(200).send(educacionUpdate);
    } catch (error) {
        res.status(500).send(error);
    }
}

educacionController.deleteEducacion = async (req, res) => {
    try {
        const id = req.params.id;

        const educacionDeleted = await Educacion.findByIdAndDelete(id);

        res.status(200).send(educacionDeleted);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = educacionController;