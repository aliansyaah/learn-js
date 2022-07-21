/* 
    onRejected with Catch Method
    Salah satu cara menulis kode yang baik adalah mengikuti prinsip yang disebut "separation of concerns" atau PEMISAHAN MASALAH. Pemisahan masalah berarti mengorganisasikan kode ke dalam bagian-bagian yang berbeda berdasarkan tugas tertentu. Hal ini akan memudahkan kita kelak mencari kode yang salah jika aplikasi tidak bekerja dengan baik.

    Perlu diketahui bahwa method .then() akan mengembalikan nilai promise yang sama dengan ketika objek promise itu dipanggil. Melalui sifatnya ini, daripada kita menetapkan LOGIKA RESOLVE dan REJECT pada satu method then(), kita dapat memisahkan kedua logika tersebut menggunakan masing-masing method then() seperti ini:
    
    checkStock()
        .then(handleSuccess)
        .then(null, handleFailure);

    Namun untuk menetapkan onRejected handler, kita perlu memberikan nilai null pada parameter pertama method .then(). Hal ini sedikit merepotkan bukan? Solusinya kita dapat menggunakan method lain, yakni .catch().

    Method .catch() mirip seperti .then(). Namun, method ini hanya menerima satu parameter function yang digunakan untuk rejected handler. Method catch() ini akan terpanggil ketika objek promise memiliki kondisi onRejected. 
    Berikut contoh penggunaan method .catch():
*/

// Object stock
const stock = {
    coffeeBeans: 250,
    water: 1000,
}

// checkStock() merupakan fungsi yang mengembalikan PROMISE dan akan menghasilkan resolve() dengan membawa nilai "Stok cukup. Bisa membuat kopi".
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

// Kita mendeklarasikan fungsi handleSuccess() dan handleFailure() yang mencetak nilai dari parameternya
const handleSuccess = resolvedValue => {
    // console.log(resolvedValue);
    console.log("Berhasil: "+resolvedValue);
}
 
const handleFailure = rejectionReason => {
    console.log("Gagal: "+rejectionReason);
}

// On rejected with catch method
checkStock()
    .then(handleSuccess)
    .catch(handleFailure);

/* Dengan menggunakan method catch(), kita dapat menerapkan prinsip separation of concerns sekaligus membuat kodenya menjadi lebih rapi. */
