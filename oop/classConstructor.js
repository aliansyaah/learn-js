/* 
    Ketika kita membuat sebuah objek, adakalanya karakteristik dari blueprint yang kita buat harus sudah didefinisikan bersamaan dengan sebuah objek saat pertama kali diinisiasi. 
    Constructor adalah sebuah method/function yang dijalankan pertama kali ketika object dibuat. 
    Dari contoh kelas yang kita buat sebelumnya, kita akan membuat from sebagai sebuah value yang harus ditulis ketika sebuah objek diinisiasi.
*/
// Cara 1 menggunakan statement "class"
class Mail1 {
    constructor(author) {
        this.from = 'pengirim@dicoding.com';
        console.log('is instantiated', author);
    };
}

// Cara 2 menggunakan statement "function"
function Mail2(author) {
    this.from = author;
    console.log('is instantiated', author);
}

const mail1Email = new Mail1("emailku1@dicoding.com");  // misalkan untuk email
const mail1Sms = new Mail1(081234567891);   // misalkan untuk SMS
// console.log(mail1Email);
// console.log(mail1Sms);

const mail2Email = new Mail1("emailku2@dicoding.com");
const mail2Sms = new Mail1(081234567892);