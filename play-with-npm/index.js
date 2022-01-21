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