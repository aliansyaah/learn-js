/* 
    Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai 
    dan menempatkannya dalam satu variabel.

    Perbedaan array dengan object adalah data pada array disusun secara berurutan 
    dan diakses menggunakan index. 
    Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang 
    di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.
*/
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// Menambahkan data ke dalam array
myArray.push('JavaScript');
console.log("\nMenambahkan data ke dalam array: ");
console.log(myArray);

// Mengeluarkan data atau elemen terakhir dari array
myArray.pop();
console.log("\nMengeluarkan data atau elemen terakhir dari array: ");
console.log(myArray);

// Mengeluarkan elemen pertama dari array
myArray.shift();
console.log("\nMengeluarkan elemen pertama dari array: ");
console.log(myArray);

// Menambahkan elemen pertama di awal array
myArray.unshift("Apple");
console.log("\nMenambahkan elemen pertama di awal array: ");
console.log(myArray);

// Menghapus data dari array (hanya menghapus data pada index)
delete myArray[1];
console.log("\nMenghapus data dari array (hanya menghapus data pada index): ");
console.log(myArray);

// Menghapus data dari array (menghapus elemen)
myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen
console.log("\nMenghapus data dari array (menghapus elemen): ");
console.log(myArray);