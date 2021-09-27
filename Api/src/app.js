const express = require('express');
//const morgan = require('morgan')

const usuarioRoute = require('./routes/usuario.route')

//middlewares
//app.use(morgan('dev'));
const app = express();
//app.use(morgan('dev'));
app.use(express.json());
app.use('/usuarios', usuarioRoute)
module.exports = {app};