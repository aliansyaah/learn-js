/* 
    ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal sebagai arrow function. Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.

    Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function. Regular function dapat berupa function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. Itu sebabnya arrow function memiliki nama lengkap “arrow function expression”.
*/

/* 1. Contoh regular function */
// a. Function declaration
function sayHello1(greet) {
    console.log(`${greet}!`);
}
 
// b. Function expression
const sayName1 = function (name) {
    console.log(`Nama saya ${name}`)
}

console.log("\nRegular function:");
sayName1("Ali", sayHello1("Hello"));

/* 2. Contoh arrow function */
// a. Function expression
const sayHello2 = (greet) => {
    console.log(`${greet}!`)
}
 
const sayName2 = (name) => {
// const sayName2 = name => {              // jika hanya 1 param, tanda kurung bisa dihapus
    console.log(`Nama saya ${name}`)
}

console.log("\nArrow function:");
sayName2("Ali", sayHello2("Hello"));

// b. Jika tanpa parameter, kita tetap menuliskan tanda kurungnya
const sayMorning = () => {
    console.log("Selamat pagi semuanya!")
};

console.log("\nArrow function (tanpa parameter):");
sayMorning();

// c. One line function
const sayName3 = name => console.log(`Nama saya ${name}`);

console.log("\nArrow function (one line function):");
sayName3("Leia");

const sayMorning2 = () => console.log("Selamat pagi semuanya!");
sayMorning2();

/*  Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return 
    (HANYA BEKERJA UNTUK FUNGSI SATU BARIS).
*/
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));