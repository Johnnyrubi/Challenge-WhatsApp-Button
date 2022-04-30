const express = require('express');
const { Button } = require('./models');

const app = express();
const PORT = 3000;


app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
