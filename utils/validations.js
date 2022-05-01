const erro = (statusCode) => ({ statusCode });

const verificationId = (param) => {
    ifExists(param);
    ifIsNumber(param);
};

const ifIsNumber = (param) => {
    if (!param || param === '') {
        throw erro({ status: 400, message: `${param} precisa ser um numero` });
    }
};

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
    verificationId,
    ifIsBoolean,
    ifExists,
    ifIsNumber,
    ifIsString
};