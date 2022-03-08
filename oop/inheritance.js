/* 
    3. Inheritance
    Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, tetapi mereka bukanlah objek yang sama. Di sinilah inheritance atau pewarisan berperan. 
    SMS dan jenis pesan lainnya memiliki karakteristik umum yang dimiliki juga oleh jenis pesan lainnya, seperti memiliki konten pesan, alamat/nomor pengirim, alamat/nomor penerima, dsb. 
    Maka dari itu, Email sebagai objek turunan (subclass) mewarisi semua sifat dan perilaku dari objek induknya (superclass) Mail. 
    Begitu juga dengan objek Whatsapp juga mewarisi sifat dan perilaku yang sama. Namun, whatsapp bisa membuat grup, mengirim broadcast message sedangkan Email tidak.
*/

/* 
    Misalkan kita ingin membuat 2 (dua) child class yaitu WhatsApp dan Email. Maka dalam JavaScript cara menuliskan pewarisan terdapat 2 cara 

    Cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
    class ChildClassName extends ParentClassName{}

    Cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
    ChildClassName.prototype = new ParentClassName()
*/

// Kita akan membuat sebuah child class bernama WhatsApp yang mewarisi kelas Mail
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

class WhatsApp extends Mail {
    constructor() {
        super();
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp(080111000222);
console.log(wa1.myProfile());

// Kita juga dapat mengakses attribute maupun method dari parent class yang Accessible
wa1.sendMessage('halo', 089000999888);
console.log(wa1.showAllContacts());

/* 
    4. Polymorphism
    Polymorphism dalam bahasa Yunani berarti “banyak bentuk”. 
    Sederhananya objek dapat memiliki bentuk atau implementasi yang berbeda-beda pada satu metode yang sama. 
    Semua jenis Mail dapat mengirim pesan, namun whatsapp, email, sms tentunya memiliki cara yang berbeda dalam mengirim pesan, misalkan: whatsapp dapat mengirim pesan suara sedangkan yang lainnya tidak, email dapat menyaring konten spam saat mengirim pesan sedangkan yang lain tidak. 
    Perbedaan bentuk atau cara mengirim pesan tersebut merupakan contoh dari polymorphism.
*/