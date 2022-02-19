/* 
    Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...).
 */

const foods = ["Seafood", "Salad", "Nugget", "Soup"];

console.log("\nCetak biasa: ");
console.log(foods);
console.log("\nCetak menggunakan spread operator: ");
console.log(...foods);

// Jika tidak menggunakan spread operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];
console.log("\nJika tidak menggunakan spread operator: ");
// Akan menjadi array baru yang menampung dua array di dalamnya
console.log(allFavorites);

// Jika menggunakan spread operator
const allFavoritesSpread = [...favorites, ...others];
console.log("\nJika menggunakan spread operator: ");
console.log(allFavoritesSpread);

// Selain array, spread operator juga bisa digunakan untuk object literals
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log("\nObject literals: ");
console.log(newObj);