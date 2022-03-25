/* 
    Konsep selanjutnya yang ada di Functional Programming adalah rekursif. Apa itu rekursif? Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

    Kita akan mencoba mengubah fungsi countDown yang biasanya kita buat menggunakan sintaksis iterasi seperti for, foreach, while seperti kode di bawah menjadi bentuk rekursif.
*/

// Bentuk iterasi (looping biasa)
const countDown = start => {
    do {
        console.log(start);
        start -=1;
    }
    while(start > 0);
};
console.log("Iterasi:");
countDown(10);

// Bentuk rekursifnya adalah sebagai berikut
const countDownRekursif = start => {
    console.log(start);
    // if(start > 0) countDownRekursif(start - 1);
    if(start > 1) countDownRekursif(start - 1);
}
console.log("\nRekursif:");
countDownRekursif(5);

/* 
    Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi dengan rekursi. Namun tidak sebatas itu saja, dengan rekursi kita dapat membuat dan mengolah data structures seperti Tree dan Array.
*/