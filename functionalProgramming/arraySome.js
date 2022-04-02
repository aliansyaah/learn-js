/* 
    4. Array Some
    array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.

    arr.some(callback(element, [index], [array]), [thisArg])
    // [...] adalah opsional parameter

    Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.
*/

// Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log(even);