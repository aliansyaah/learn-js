/* ===== 1. Import 1 value/nilai ===== */

// Berbeda dengan gaya Node.js, kita gunakan keyword "import" ketika mendeklarasikan variabel yang di-import. Kita juga menggunakan keyword from untuk menentukan lokasi berkas JavaScript-nya.

import coffeeStock from './state.js';
 
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(coffeeStock);
/*  
    Jika terdapat error ketika menjalankan index.js, 
    tambahkan script "type": "module" di package.json
*/