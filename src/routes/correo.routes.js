const express = require('express');
const app = express();

let envio = require('../controllers/email.controllers');

app.post('/envio', envio.envioCorreo);

module.exports = app;