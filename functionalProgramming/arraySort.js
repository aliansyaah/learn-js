/* 
    6. Array Sort
    array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

    arr.sort([compareFunction])
    // [...] adalah opsional parameter
*/

// Contoh sederhananya adalah sebagai berikut
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);

/* 
    Contoh pengurutan di atas didasarkan pada PENGURUTAN BENTUK TIPE DATA STRING. 
    Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.
*/
const array2 = [1, 30, 4, 1000];
const compareNumber = (a, b) => {
    return a - b;
}
const sorting = array2.sort(compareNumber);
console.log(sorting);

/* 
    Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).
    - Jika, negative maka `a` akan diletakkan sebelum `b`
    - Jika, positive maka `b` akan diletakkan sebelum `a`
    - Jika, 0 maka tidak ada perubahan posisi.
*/