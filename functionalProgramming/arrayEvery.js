/* 
    7. Array Every
    array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan. 
    Kembalian dari array.every() adalah nilai Boolean.

    arr.every(callback(element, [index], [array])
    // [...] adalah opsional parameter
*/

// Sebagai contoh, kita akan mengecek apakah seorang siswa telah lulus semua uji materi
const scores = [70, 85, 90];
const minimumScore = 65

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);