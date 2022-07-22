/* 
    Chaining promises
    Kita sudah tahu buruknya penulisan callback hell. Namun, kita tidak dapat menghindari keadaan di mana proses asynchronous saling bergantung satu sama lain. Untuk menghindari callback hell, salah satu solusinya adalah Promise.

    Dengan promise kita dapat melakukan proses asynchronous secara berantai. Contohnya, ketika kita ingin membuat satu gelas kopi, akan ada beberapa tahapan yang dikerjakan oleh mesin pembuat kopi, seperti memastikan mesin sudah siap, memastikan stok biji kopi dan air cukup, membuat kopi, lalu menuangkannya ke dalam gelas. Tahapan tersebut harus dilakukan secara berurutan.

    Untuk memastikan rangkaian promise berjalan dengan sesuai, kita perlu mengembalikan (return) promise selanjutnya. Contohnya adalah seperti ini:
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
        // menggunakan fungsi setTimeout() untuk menyimulasikan proses asynchronous dan menunda proses selama 1 detik
    });
};

// Promise checkStock
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;   // ubah status mesin kopi menjadi "sibuk"
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

// Promise brewCoffee
const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};

function makeEspresso() {
    checkAvailability()                 // mengecek ketersediaan mesin
        .then((value) => {
            console.log(value);
            return checkStock();        // mengecek stok
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
        });
}
 
makeEspresso();

/* 
    Rangkaian proses di atas berjalan berurutan karena kita menggunakan method .then(). Jika kita baca kodenya kurang lebih akan seperti ini: "Untuk membuat espresso lakukan pengecekan ketersediaan mesin, kemudian periksa stok di dalam mesin, kemudian buat kopi."

    Apabila promise mengalami kegagalan (reject), ia akan ditangani oleh method catch() yang kita tuliskan di akhir. Entah itu disebabkan karena mesin kopi sedang sibuk atau stok bahannya habis.
*/