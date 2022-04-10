/* 
    8. Array forEach
    Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. 
    Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. 
    Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.

    Melalui fungsi ini, kita dapat mengubah sintaks perulangan berdasarkan jumlah array secara IMPERATIF menjadi DEKLARATIF.
*/

// Array names
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// Cara IMPERATIF
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}

console.log("\n");

// Cara DEKLARATIF
names.forEach((name) => {
    console.log(`Hello, ${name}!!`);
});

/* 
    Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for). 
    Hal ini juga berlaku ketika pada fungsi map dan filter.
*/

console.log("\n");

for (let i = 0; i < names.length; i++) {
    if(names[i] === 'Jeff') continue;   // bisa!

    console.log(`Hello, ${names[i]}!`);
}

/* names.forEach((name) => {
    if(names[i] === 'Jeff') continue;   // tidak bisa
    
    console.log(`Hello, ${name}!!`);
}); */