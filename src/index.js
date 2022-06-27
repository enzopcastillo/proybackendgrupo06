require('./database');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: "http://localhost:4200"}));
app.use(express.json());

app.use('/api/empleados', require('./routes/empleado.routes'));
app.use('/api/dependencias', require('./routes/dependencia.routes'));
app.use('/api/tipoReunion', require('./routes/tipoReunion.routes'));
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Server started on port', app.get('port'));
});