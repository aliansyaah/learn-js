// Destructuring object, digunakan utk import lebih dari 1 nilai
const {coffeeStock, isCoffeeMachineReady} = require('./state');
console.log(coffeeStock);
console.log(isCoffeeMachineReady);

/*  
    Jika terdapat error ketika menjalankan index.js, 
    hapus script "type": "module" di package.json
*/