/* ===== 2. Import lebih dari 1 value/nilai ===== */
// Untuk mendapatkan nilai yg diexport melalui named export, gunakan destructuring object
import { coffeeStock, isCoffeeMachineReady } from './state.js';
// import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';   // menggunakan alias

console.log(coffeeStock);
console.log(isCoffeeMachineReady);
// console.log(stock);