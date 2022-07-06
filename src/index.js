require('./database');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser');

app.use(cors({origin: "http://localhost:4200"}));
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/api/dependencia', require('./routes/dependencia.routes'));
app.use('/api/empleado', require('./routes/empleado.routes'));
app.use('/api/notificacion', require('./routes/notificacion.routes'));
app.use('/api/oficina', require('./routes/oficina.routes'));
app.use('/api/recurso', require('./routes/recurso.routes'));
app.use('/api/reunion', require('./routes/reunion.routes'));
app.use('/api/tipoReunion', require('./routes/tipoReunion.routes'));
app.use(require('./routes/correo.routes'));

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Server started on port', app.get('port'));
});