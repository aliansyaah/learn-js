/* 
    4 konsep besar yang ada di FP:
    Pure Function, Immutability, Recursive, dan High-Order Function.
*/

/* 
    1. Pure Function
    Salah satu konsep besar dari paradigma FP adalah Pure Function. 
    Apa artinya? Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya. 
    Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu menghasilkan sesuatu yang sama, terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.
*/

// Tidak pure function
/* let PI = 3.14;
const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari); 
}
console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah
console.log(hitungLuasLingkaran(4)); // 80 */

// Pure function
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
}
console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah
console.log(hitungLuasLingkaran(4)); // 80
console.log(hitungLuasLingkaran(8)); // 80

/* 
    Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. 
    Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.
*/

// Tidak pure function
/* const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
}; */

// Pure function
const createPersonWithAge = (age, person) => {
    return { ...person, age };
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});

/* 
    Agar lebih mudah dalam mengetahui apakah fungsi yang kita buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang kita buat:
    1. Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
    2. Hanya bergantung pada argumen yang diberikan.
    3. Tidak menimbulkan efek samping.

    Bila 3 konsep di atas terpenuhi, maka bisa dipastikan kita membuat sebuah pure function.
*/