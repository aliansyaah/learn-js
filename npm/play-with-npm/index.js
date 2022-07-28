/* 
    Using Package

    Di dalam dokumentasinya, lodash menyebutkan bahwa mereka menyediakan utilitas untuk membuat JavaScript lebih mudah dengan menghilangkan kerumitan ketika menggunakan array, number, object, string, dll.

    Misalnya, untuk menjumlahkan setiap nilai number di dalam array, lakukan dengan cara seperti berikut.
*/

import _ from 'lodash';

const myArray = [1, 2, 3, 4];

// Menggunakan for loop
/* let sum = 0;
for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
} */

// Menggunakan fungsi reduce
/* let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
}); */

// Menggunakan lodash
const sum = _.sum(myArray);

console.log(sum);