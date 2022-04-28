/* 
    Set Timeout
    Fungsi setTimeout() merupakan cara yang paling mudah untuk membuat kode kita dijalankan secara asynchronous. 
    
    Fungsi ini menerima dua buah parameter. Parameter pertama adalah fungsi yang akan dijalankan secara asynchronous. Kedua adalah nilai number dalam milisecond sebagai nilai tunggu sebelum fungsi dijalankan.
*/

console.log("Selamat datang!");
setTimeout(() => {
    console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?");
/* 
    Dengan asynchronous, urutan pekerjaannya menjadi:
    1. Mencetak -> Selamat datang!
    2. Mencetak -> Ada yang bisa dibantu?
    3. Menunggu selama 3 detik
    4. Mencetak -> Terima kasih sudah mampir, silakan datang kembali!
*/