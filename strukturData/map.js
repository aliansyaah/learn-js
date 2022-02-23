/* 
    Map
    Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
*/

// Mendefinisikan Map
// const myMap = new Map();

// Mendefinisikan sekaligus menetapkan nilai dari Map, menggunakan array multi dimensi
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log("\nmyMap: ");
console.log(myMap);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
]);

console.log("\nCapital size: ");
console.log(capital.size);

// Get
console.log("\nCapital get london: ");
console.log(capital.get("London"));

// Set
console.log("\nCapital set New Delhi");
capital.set("New Delhi", "India");

console.log("\nCapital size: ");
console.log(capital.size);

// Has
console.log("\nCapital has New Delhi: ");
console.log(capital.has("New Delhi"));

// Delete
console.log("\nDelete New Delhi: ");
console.log(capital.delete("New Delhi"));
console.log(capital.size);