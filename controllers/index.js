const service = require('../services');

const getAll = async (req, res, next) => {
    try {
        const result = await service.getAll();
        return res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        console.log(id)
        const result = await service.getById(id);
        return res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};




module.exports = {
    getAll,
    getById
};
