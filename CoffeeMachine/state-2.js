const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};

// Pertama
// Mengekspor satu nilai menggunakan default export
// export default coffeeStock;


// Kedua
const isCoffeeMachineReady = true;

// Named export digunakan untuk export banyak nilai dalam berkas JavaScript
// Nilai yang akan diekspor dituliskan di dalam object literals
export {coffeeStock, isCoffeeMachineReady};