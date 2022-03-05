/* 
    Dalam OOP, properti dibagi menjadi 2:
    - Internal interface: method dan property yang dapat diakses oleh method lain namun tidak bisa diambil/dijalankan di luar kelas tersebut.
    - External interface: method dan property yang dapat diakses di luar kelas itu sendiri.

    Dalam JavaScript sendiri terdapat 2 jenis akses identifier untuk sebuah field:
    - Public: dapat diakses dari mana pun.
    - Private: hanya dapat diakses dari dalam kelas itu sendiri.

    Secara default, semua atribut yang didefinisikan adalah public.
*/

class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`\nyou send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}

const mail1 = new Mail();
mail1.from;         // 'pengirim@dicoding.com'
mail1.contacts;     // ['penerima@dicoding.com']

console.log("Sebelum kirim:");
console.log("From: "+mail1.from);
console.log("Contact: "+mail1.contacts);

mail1.sendMessage('hallo', 'penerima@dicoding.com');    // method mengirim pesan

console.log("\nSetelah kirim:");
console.log("From: "+mail1.from);
console.log("Contact: "+mail1.contacts);

/* 
    Dari contoh di atas, bagaimana jika kita ingin mengubah attribute contacts AGAR tidak dapat diakses langsung oleh objek yang telah meng-instansiasi?
    Kita perlu mengubah sedikit pada kode class Mail yang kita miliki.
    Lihat pada file classProperty3.js
*/