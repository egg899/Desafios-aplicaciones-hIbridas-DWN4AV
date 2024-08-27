//Aca llamando al archivo .env a traves de dotenv
require('dotenv').config();

const clave = process.env.DB_PASS;
console.log(clave);