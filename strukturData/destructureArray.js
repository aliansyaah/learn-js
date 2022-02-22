/* 
    1. Destructure array
    Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log("\nDestructuring array: ");
console.log(firstFood, secondFood, thirdFood, fourthFood);

// Mengambil hanya index ke-3 saja
const [ , , makananKe3 ] = favorites;

console.log("\nMengambil hanya index ke-3 saja: ");
console.log(makananKe3);

/* 
    2. Destructuring Assignment
    Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung.
*/
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood2 = "Ice Cream";
let herFood2 = "Noodles";

console.log("\nBefore destructuring assignment: ");
console.log(myFood2, herFood2);

// Destructuring assignment
[myFood2, herFood2] = favorites2;

console.log("\nDestructuring assignment: ");
console.log(myFood2, herFood2);

/* 
    3. Menukar nilai antara dua variabel
*/
let a = 1;
let b = 2;

console.log("\nSebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a]

console.log("\nSetelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);


/* 
    4. Default values
    Sama seperti object, pada destructuring array kita juga dapat memberikan nilai default pada variabel yang tidak dapat terjangkau oleh array, sehingga nilai pada variabel tidak akan menjadi undefined
*/
const favorites4 = ["Seafood"];
 
const [myFood4, herFood4 = "Salad"] = favorites4;

console.log("\nDefault values: ");
console.log(myFood4, herFood4);