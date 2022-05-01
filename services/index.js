const { Button } = require('../models');
const validations = require('../utils/validations');


const erro = (statusCode) => ({ statusCode });

const getAll = async () => {
    try {
        const result = await Button.findAll();
        return result
    } catch (e) {
        throw erro({ status: 500, message: "Erro Interno" });
    }
};

const getById = async (id) => {
    validations.ifExists(id);
    try {
        const result = await Button.findOne({
            where: { id }
        })
        if (!result) {
            throw erro({ status: 404, message: "Não encontrado" });
        }
        return result;
    } catch (e) {
        throw erro({ status: 500, message: "Erro Interno"});
    }
};



module.exports = {
    getAll,
    getById
};
