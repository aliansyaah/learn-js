/* 
    3. Array Reduce
    Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi nilai pada setiap elemen dan menampilkan dalam sebuah nilai saja.

    arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
    // [...] adalah opsional parameter

    Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.
*/

// Contoh penggunaannya misalkan ketika kita ingin menjumlahkan total nilai siswa
const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);