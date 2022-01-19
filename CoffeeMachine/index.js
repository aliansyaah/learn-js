// Pertama
/* console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!"); */

// Kedua
/*
Dalam inisialisasi variabel coffeeStock (nama variabel bebas kita tentukan), kita gunakan method require() dengan memberikan parameter lokasi berkas state.js. Dengan begitu variabel coffeeStock akan memiliki nilai module.exports yang sama pada berkas state.js. Setelah mendapatkan nilainya, kita bebas menggunakannya seperti variabel lokal pada umumnya.
*/

/* const coffeeStock = require('./state');
console.log(coffeeStock);

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

makeCoffee("robusta", 80); */

// Ketiga

// Destructuring object
const {coffeeStock, isCoffeeMachineReady} = require('./state');
console.log(coffeeStock);
console.log(isCoffeeMachineReady);

/*  
    Jika terdapat error ketika menjalankan index.js, 
    hapus script "type": "module" di package.json
*/