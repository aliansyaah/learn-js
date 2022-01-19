// Pertama
/* import coffeeStock from './state-2.js';
 
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(coffeeStock); */

/*  
    Jika terdapat error ketika menjalankan index-2.js, 
    tambahkan script "type": "module" di package.json
*/


// Kedua
// Untuk mendapatkan nilai yg diexport melalui named export, gunakan destructuring object
import { coffeeStock, isCoffeeMachineReady } from './state-2.js';
// import { coffeeStock as stock, isCoffeeMachineReady } from './state-2.js';   // menggunakan alias

console.log(coffeeStock);
console.log(isCoffeeMachineReady);
// console.log(stock);