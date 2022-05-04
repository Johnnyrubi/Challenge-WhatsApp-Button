const express = require("express");
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = 3000
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
const controller = require('./controllers');


app.get('/', (controller.getAll));

app.get('/:id', (controller.getById));

app.post('/', (controller.post));

app.put('/:id', (controller.update));

app.delete('/:id', (controller.exclude));

app.use((erro, _req, res, _next) => {
    if(erro.statusCode) {
        const { status, message } = erro.statusCode
        return res.status(status).json({ message })
    } 
    return res.status(500).json({ message: "erro no servidor" });
});


module.exports = app;
