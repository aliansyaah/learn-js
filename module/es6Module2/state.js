/* 
    Jika sebelumnya kita hanya melakukan ekspor satu nilai pada berkas JavaScript menggunakan default export, selanjutnya kita akan membahas bagaimana mengekspor banyak nilai dalam satu berkas JavaScript menggunakan ES6.

    Named export digunakan untuk mengekspor banyak nilai dalam berkas JavaScript. Cara kerjanya mirip seperti pada Node.js.
*/

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};

/* ===== 2. Export lebih dari 1 value/nilai ===== */
const isCoffeeMachineReady = true;

// Named export digunakan untuk export banyak nilai dalam berkas JavaScript
// Nilai yang akan diekspor dituliskan di dalam object literals
export {coffeeStock, isCoffeeMachineReady};