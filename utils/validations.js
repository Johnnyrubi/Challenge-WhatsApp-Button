const erro = (statusCode) => ({ statusCode });

const ifExists = (param) => {
    if (!param || param === '') {
        throw erro({ status: 400, message: `${param} não pode ser vazio`});
    }
};


const ifIsString = (param) => {
    if (typeof param !== "string") {
        throw erro({ status: 400, message: `${param} precisa ser uma String`});
    }
};

const ifIsBoolean = (param) => {
   if (typeof param !== "boolean") {
       throw erro({ status: 400, message: `${param} precisa ser um Booleano`})
   }
};

module.exports = {
    ifIsBoolean,
    ifExists,
    ifIsString
};
