const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketio(server)

io.on('connection', socket => {
    
});

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

server.listen(3333); 
