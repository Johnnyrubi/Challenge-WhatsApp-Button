const service = require('../services');

const getAll = async (req, res, next) => {
    try {
        const result = await service.getAll();
        return res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAll
};
