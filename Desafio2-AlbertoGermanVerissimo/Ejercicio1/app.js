//Without type:module in package JSON
const esPrimo  = require('./index');



let booleano = esPrimo(10);
console.log('Este es un mensaje de prueba')
console.log(booleano); // Output: false

//with type:module in package JSON


// import {esPrimo} from './index.js';
// let booleano = esPrimo(10);
// console.log(booleano); // Output: false
