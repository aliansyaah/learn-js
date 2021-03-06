/* 
    Class Method adalah function atau method yang ada di dalam sebuah object. 
    Untuk menggunakannya, sebuah class harus di-instantiate terlebih dahulu menjadi object baru agar bisa dijalankan. 
    Contoh class mail di file classProperty2, kita akan menggunakan method sendMessage maka kita harus meng-instantiate Mail terlebih dahulu.
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
const mail = new Mail();
mail.sendMessage('hallo', 'penerima@dicoding.com');

/* Kita tidak dapat langsung mengakses sendMessage tanpa melakukan instansiasi terlebih dahulu */
// Contoh
// Mail.sendMessage('hallo', 'penerima@dicoding.com');