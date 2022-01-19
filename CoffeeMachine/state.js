const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

// Kedua
// Export coffeeStock
/* module.exports = coffeeStock;
console.log(module); */

/*
    Kode module.exports = coffeeStock membuat object coffeeStock ditetapkan sebagai nilai dari module.exports. 
    Nilai properti exports ini nantinya bisa di-import dan digunakan pada berkas JavaScript lain.
*/

// Ketiga
const isCoffeeMachineReady = true;

// Export satu nilai tapi menggunakan object literals ({})
module.exports = {coffeeStock, isCoffeeMachineReady};
// console.log(module);

