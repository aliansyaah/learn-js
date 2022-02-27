/* 
    1. Function Parameter
    Parameter dari fungsi dapat berupa tipe data apa pun, mulai dari string, number, object, bahkan fungsi lain.
*/

// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya.
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log("\n1. Function Parameter");
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/* 
    2. Default Parameters
    Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter. Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan
*/
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;

    console.log("\n2. Default Parameters");
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);

/* 
    3. Rest Parameter
    Masih ingat dengan spread operator (...)? Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut.
    Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.
*/
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log("\n3. Rest Parameter");
console.log(sum(1, 2, 3, 4, 5));