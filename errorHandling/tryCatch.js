// Tidak error
try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Tidak terjadi eror, maka kode ini diabaikan");
}

console.log("----------");

// Error
try {
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
} catch (error) {
    console.log("Terjadi error!");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log("----------");

// Try Catch Finally
try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}