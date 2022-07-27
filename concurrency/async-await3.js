/* 
    Chaining Promise using async-await

    Pertanyaan selanjutnya adalah bagaimana melakukan promise berantai bila menggunakan async/await? Jawabannya adalah sama seperti ketika kita mendapatkan nilai dari function yang berjalan secara synchronous.
*/

// Objek untuk menyimpan state dari mesin kopi
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

// Promise checkAvailability
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

// Promise checkStock
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

// Promise boilWater
const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air...");
        setTimeout(() => {
            resolve("Air panas sudah siap!");
        }, 2000);
    })
}

// Promise grindCoffeeBeans
const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi...");
        setTimeout(() => {
            resolve("Biji kopi sudah siap!");
        }, 1000);
    })
}

// Promise brewCoffee
const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};

// Dengan pendekatan async-await, maka kode mesin kopi kita akan menjadi seperti ini:
// Chaining Promise using async-await
async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();

        // untuk menjalankan beberapa promise sekaligus secara bersamaan dengan Promise.all, kita bisa menuliskannya seperti ini
        await Promise.all([boilWater(), grindCoffeeBeans()]);

        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeEspresso();

/* 
    Async/await ini menjadi fitur baru yang sangat berguna. Terlebih untuk kita yang lebih nyaman menangani proses ASYNCHRONOUS dengan menggunakan gaya SYNCHRONOUS. 
*/