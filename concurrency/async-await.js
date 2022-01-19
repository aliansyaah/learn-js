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

/* function makeCoffee() {
    const coffee = getCoffee(); // async process menggunakan promise
    console.log(coffee);
} */

// Promise
/* function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
} */

// Callback
/* function makeCoffee() {
    getCoffee(function(coffee) {
        console.log(coffee);
    });
} */

// Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeCoffee() secara asynchronous
// Keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve
/* async function makeCoffee() {
    const coffee = await getCoffee(); // async process menggunakan promise
    console.log(coffee);
} */


// Handle onRejected using async-await
async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
makeCoffee();