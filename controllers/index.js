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
        const result = await service.getById(id);
        return res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const post = async (req, res, next) => {
    try {
        const result = await service.post(req.body);
        return res.status(201).json(result)
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await service.update(id, req.body);
        return res.status(204).json(result);
    } catch (err) {
        next(err);
    }
};

const exclude = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await service.exclude(id);
        return res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAll,
    getById,
    post,
    update,
    exclude
};
