/* 
    Callback Function
    Hal yang seringkali membingungkan ketika bekerja dengan program synchronous dan asynchronous adalah bagaimana menangani suatu nilai yang didapatkan secara asynchronous pada program yang berjalan secara synchronous. Contohnya seperti kode berikut:
*/

/* Cara salah */
// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//     }, 3000);
//     return coffee;
// }
 
// const coffee = orderCoffee();
// console.log(coffee);

/* 
    Jika kita melakukan hal seperti di atas untuk mencetak nilai coffee, maka hal tersebut tidak akan pernah terjadi. Fungsi setTimeout() tidak akan menghentikan JavaScript untuk mengeksekusi kode yang ada selanjutnya. 
    Jadi, fungsi orderCoffee() akan selalu mengembalikan nilai null, karena kode return coffee akan dieksekusi terlebih dulu dibandingkan dengan coffee = "Kopi sudah jadi!";

    Kode asynchronous perlu disusun dengan cara yang berbeda dari synchronous. Cara paling dasar adalah dengan CALLBACK FUNCTION.
*/

/* Cara benar */
// Tambahkan parameter dgn nama 'callback'
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        
        // Panggil atau gunakan callback yang diisikan dengan data yang akan dibawa (coffee) ketika task selesai dilakukan
        callback(coffee);
    }, 3000);

    // Setelah menggunakan callback, fungsi tidak perlu lagi mengembalikan nilai.
}

// Untuk menggunakan fungsi orderCoffee, ubah kode menjadi
orderCoffee(coffee => {
    console.log(coffee);
});