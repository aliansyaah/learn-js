/* 
    Object Oriented Programming (OOP) adalah salah satu paradigma dalam dunia pemrograman komputer. Ia adalah pendekatan berbasis objek, di mana suatu objek terdiri dari kumpulan atribut dan method di dalamnya.

    Atribut adalah variabel yang digunakan untuk menyimpan nilai.
    Method adalah fungsi yang digunakan untuk menjalankan suatu proses.
*/

// Object bernama mail
const mail = {
    // Atribut "from"
    from: "pengirim@dicoding.com",

    // Method "sendMessage"
    sendMessage: function (msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};
 
console.log("\nFrom:");
console.log(mail.from);

console.log("\nSendMessage:");
mail.sendMessage('apakabar', 'penerima@dicoding.com');

// Ubah isi atribut
mail.from = "pengirim2@dicoding.com";

console.log("\nFrom:");
console.log(mail.from);

console.log("\nSendMessage:");
mail.sendMessage('apakabar', 'penerima@dicoding.com');

// Menambahkan fungsi/method baru
mail.saveContact = function(addr) {
    console.log("\nSaveContact:");
    console.log(`Contact saved ${addr}`);
}
mail.saveContact('Jalan Paster No. 12');