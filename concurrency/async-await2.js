/* 
    Handle onRejected using async-await

    Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFulfilled). Lantas bagaimana jika promise gagal dilakukan (onRejected)? 
    Caranya cukup sederhana. Kembali lagi kepada prinsip synchronous code. 
    Kita dapat menangani sebuah eror atau tolakan dengan menggunakan try...catch.

    Ketika menggunakan async/await, biasakan ketika mendapatkan resolved value dari sebuah promise, untuk menempatkannya di dalam blok try seperti ini:

    async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    }

    Dengan begitu kita dapat menggunakan blok catch untuk menangani jika promise gagal dilakukan (onRejected).
}
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

async function makeCoffee() {
    try {
        // Biasakan ketika mendapatkan resolved value dari sebuah promise, kita tempatkan di dalam blok try
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        // Agar kita dapat menggunakan blok catch utk menangani jika promise gagal dilakukan
        console.log(rejectedReason);
    }
}
 
makeCoffee();