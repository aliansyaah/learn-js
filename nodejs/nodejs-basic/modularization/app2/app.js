/* Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul. */
const {firstName, lastName} = require('./user');

/* 
    Untuk memudahkan developer dalam proses pengembangan, Node.js menyediakan beberapa modul bawaan yang dapat Anda manfaatkan guna mendukung efisiensi untuk melakukan hal-hal yang umum. Modul bawaan tersebut dikenal sebagai core modules. Anda bisa mengimpor core modules dengan fungsi yang sama, yakni require().

    // Mengimpor core module http
    const http = require('http'); 
*/

console.log(firstName);
console.log(lastName);

/* 
    Lokasi core module dituliskan tidak seperti local module. Lokasi bersifat mutlak (core module disimpan folder lib pada lokasi Node.js dipasang) sehingga kita cukup menuliskan nama modulnya saja.

    Ada 3 jenis modul pada Node.js, Anda sudah mengetahui dua di antaranya. Berikut rinciannya:

    1. Local module: module yang dibuat secara lokal berlokasi pada Node.js project Anda.
    2. Core module: module bawaan Node.js berlokasi di folder lib di mana Node.js terpasang pada komputer Anda. Core module dapat digunakan di mana saja.
    3. Third party module: module yang dipasang melalui Node Package Manager. Bila third party module dipasang secara lokal, maka modul akan disimpan pada folder node_modules di Node.js project Anda. Bila dipasang secara global, ia akan disimpan pada folder node_modules di lokasi Node.js dipasang.
*/