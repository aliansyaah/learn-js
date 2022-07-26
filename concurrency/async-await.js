/* 
    Async Await
    Pembahasan terakhir mengenai asynchronous process kali ini adalah penggunaan syntax async-await. Apa itu?
    
    Seperti yang kita tahu, penulisan kode asynchronous sedikit berbeda dengan proses synchronous.
    Contohnya, untuk mendapatkan nilai coffee dari sebuah proses asynchronous, kita tidak dapat melakukannya dengan teknik seperti pada (Fungsi 1), melainkan seperti pada (Promise) dan (Callback).
*/

// (Fungsi 1)
/* function makeCoffee() {
    const coffee = getCoffee(); // async process menggunakan promise
    console.log(coffee);
} */

// (Promise)
/* function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
} */

// (Callback)
/* function makeCoffee() {
    getCoffee(function(coffee) {
        console.log(coffee);
    });
} */

/* 
    Namun, sejak ES8 (ECMAScript 2017) kita dapat menuliskan asynchronous process layaknya synchronous process dengan bantuan keyword "async" dan "await".

    Fitur async/await sebenarnya hanya syntactic sugar. Itu berarti secara fungsionalitas bukanlah sebuah fitur baru dalam JavaScript. Namun, hanya gaya penulisan baru yang dikembangkan dari kombinasi penggunaan Promise dan generator. Sehingga, async/await ini tidak dapat digunakan jika tidak ada Promise.

    Lantas bagaimana cara menggunakan async/await ini? Pada contoh kode sebelumnya, mari kita lihat juga fungsi getCoffee() dan bagaimana ia mengembalikan promise.
*/

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

// Untuk mendapatkan nilai dari fungsi getCoffee() menggunakan .then(), maka kode kita akan seperti ini
/* function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
} */

// Async-await memungkinkan kita menuliskan proses asynchronous layaknya proses synchronous. Kira-kira kode program kita akan seperti berikut
/* function makeCoffee() {
    const coffee = getCoffee();
    console.log(coffee);
} */

/* 
    Namun, ketika kode di atas dijalankan hasilnya tidak akan sesuai yang kita harapkan karena fungsi getCoffee() merupakan object Promise. Untuk menunggu fungsi getCoffee() yang berjalan secara asynchronous, tambahkan keyword await sebelum pemanggilan fungsi getCoffee().

    const coffee = await getCoffee();
*/

// Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeCoffee() secara asynchronous
// Keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve
async function makeCoffee() {
    const coffee = await getCoffee(); // async process menggunakan promise
    console.log(coffee);
}

// Dengan perubahan di atas, kita telah berhasil menuliskan proses asynchronous dengan gaya synchronous.

makeCoffee();

/* 
    Walaupun await menghentikan proses pembacaan kode selanjutnya pada fungsi makeCoffee, tetapi ini tidak akan mengganggu proses runtime sesungguhnya pada JavaScript (global). Karena fungsi makeCoffee berjalan secara asynchronous, kita tidak dapat menggunakan await tanpa membuat function dalam scope-nya berjalan secara asynchronous.
*/
