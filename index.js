const express = require("express");
const { getConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

//crear servidor express
const app = express();

//Base de datos
getConnection();

app.use(cors());

//directorio publico
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//rutas
app.use('/country', require('./router/country'));
app.use('/archdiocese', require('./router/archdiocese'));
app.use('/diocese', require('./router/diocese'));
app.use('/parish', require('./router/parish'));
app.use('/chapel', require('./router/chapel'));


// Escuchar peticiones
app.listen(process.env.PORT, () => {
   console.log(`servidor en puerto ${process.env.PORT}`);
});