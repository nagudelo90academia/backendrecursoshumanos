require('dotenv').config();           //para leer las variables de entorno  en .env

const app = require('./app');


//Promesa para correr mi servidor

async function main() {
    await app.listen(app.get('port'));
    console.log('Served run port '+app.get('port'));
}


main();