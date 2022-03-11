/* 
    Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak) pada sebuah METHOD ataupun CONSTRUCTOR yang dimiliki oleh parent class. Sehingga, ia dapat disesuaikan dengan behavior di child class.
*/

class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

// 1. Overriding constructor
class WhatsApp extends Mail{
    constructor(username, isBussinessAccount, phone) {
        // Kita dapat menggunakan operator super() untuk mengeksekusi method parent-nya
        super(phone);       // jika tidak memasukkan phone, from/author akan 'undefined'
        // super(username);    // jika memasukkan username, from/author akan mengikuti isinya
        // super();
        
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}

// Pemanggilan
const wa1 = new WhatsApp('dicoding', true, 081234567890);

wa1.sendMessage('halo', 081309876543);
console.log(wa1.showAllContacts());