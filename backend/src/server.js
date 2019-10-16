const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express();

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query = acessar query params (para filtro)
// req.params = acessar route param (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333); 
