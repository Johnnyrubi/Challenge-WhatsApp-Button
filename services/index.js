const { Button } = require('../models');
const validations = require('../utils/validations');


const erro = (statusCode) => ({ statusCode });

const getAll = async () => {
    try {
        const result = await Button.findAll();
        if(!result|| result.length === 0) {
            throw erro
        }
        return result
    } catch (e) {
        throw erro({ status: 404, message: "Nenhum Button encontrado" });
    }
};

const getById = async (id) => {
    validations.ifExists(id);
    try {
        const result = await Button.findOne({
            where: { id }
        })
        if (!result) {
            throw erro({ status: 404, message: "Button não encontrado" });
        }
        return result;
    } catch (e) {
        throw erro({ status: 500, message: "Erro Interno"});
    }
};


const post = async ({ name, companyId, ownerId, statusId, config }) => {
    validations.ifIsBoolean(statusId)
    try {
        await Button.create({ name, companyId, ownerId, statusId, config });
        const result = await Button.findAll({
            order: [ [ 'id', 'DESC' ] ],
            limit: 1
        })
        return result;
    } catch (e) {
        throw erro({ status: 500, message: "Erro Interno" });
    }
};


const update = async ( id, {  name, companyId, ownerId, statusId, config }) => {
    validations.ifIsBoolean(statusId)
    validations.ifExists(id);
    try {
        const updateButton = await Button.update({ name, companyId, ownerId, statusId, config }, {
            where: { id }
        });
        const result = await Button.findOne({
            where: { id }
        })
        if (result === null) {
            throw erro
        }
        return result;
    } catch (e) {
        throw erro({ status: 404, message: "usuario não encontrado" });
    }
}

const exclude = async (id) => {
    validations.ifExists(id);
    try {
        const result = await Button.findOne({
            where: { id }
        })
        await Button.destroy({
            where: { id }
        })
        if (!result) {
            throw erro
        }
        return result;
    } catch (e) {
        throw erro({ status: 404, message: "Usuario não encontrado"});
    }
};

module.exports = {
    getAll,
    getById,
    post,
    update,
    exclude
};
