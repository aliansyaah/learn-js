/* 
    Hampir sama dengan overriding constructor, tetapi yang di-override di sini adalah method yang ada pada parent class. 
    Pada dasarnya semua method yang ada pada kelas parent dapat diakses langsung di child kelasnya (as is).
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

class WhatsApp extends Mail{
    constructor(username, isBussinessAccount, phone) {
        // Kita dapat menggunakan operator super() untuk mengeksekusi method parent-nya
        super(phone);
        
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }

    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        // Untuk tetap melakukan eksekusi kode pada parent class maka perlu menggunakan operator super.methodName()
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}

const wa1 = new WhatsApp('dicoding', true, 081234567890);
wa1.sendMessage('halo', 081309876543);

/* 
    Catatan:
    super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor.
    super.methodName(...) digunakan untuk memanggil parent method.
*/