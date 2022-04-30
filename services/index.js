const { Button } = require('../models');

const erro = (statusCode) => ({ statusCode });

const getAll = async () => {
    try {
        const result = await Button.findAll();
        return result
    } catch (e) {
        throw erro({ status: 500, message: "Erro Interno" })
    }
};

module.exports = {
    getAll
};
