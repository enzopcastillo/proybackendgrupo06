require('./database');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: "http://localhost:4200"}));
app.use(express.json());

//app.use('/api/agente', require('./routes/agente.route'));

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Server started on port', app.get('port'));
});