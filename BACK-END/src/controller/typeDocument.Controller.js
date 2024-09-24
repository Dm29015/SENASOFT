const typeDocumentService = require('../service/typeDocument.Service');

const getAllTypeDocumentController = async (req, res) => {
    try {
        const typeDocument = await typeDocumentService.getAllTypeDocumentService();
        res.status(200).json(typeDocument);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el tipo de documento', error: error.message });
    }
};

const getOneTypeDocumentController = async (req, res) => {
    try {
        const typeDocument = await typeDocumentService.getOneTypeDocumentService(req.params.id);
        res.status(200).json(typeDocument);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el tipo de documento', error: error.message });
    }
};

const createTypeDocumentController = async (req, res) => {
    try {
        const newTypeDocument = await typeDocumentService.createTypeDocumentService(req.body);
        res.status(201).json({ message: 'Tipo de documento creado exitosamente.', newTypeDocument});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el tipo de documento.', error: error.message });
    }
};

module.exports = {
    getAllTypeDocumentController,
    getOneTypeDocumentController,
    createTypeDocumentController
};
