/* 
    Cara 1
    Menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`).
    var contacts = [];
*/
function Mail1() {
    this.from = 'pengirim@dicoding.com';
    var contacts = [];
}
const mail1 = new Mail1();
console.log(mail1.contacts);     // undefined

/* 
    Cara 2
    Cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`.
    this._contacts = [];
*/
class Mail2 {
    constructor() {
        this._contacts = [];
        this.from = 'pengirim@dicoding.com';
    }
}
const mail2 = new Mail2();
console.log(mail2.contacts);     // undefined

/* 
    Cara 3
    Menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja.
    #contacts = [];
*/
class Mail3 {
    #contacts = [];
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
}
const mail3 = new Mail3();
console.log(mail3.contacts);     // undefined

/* 
    Dari contoh di atas, ketika kita ingin mengakses attribute contacts secara langsung melalui objek yang menginisiasi maka return-nya adalah 'undefined'. Ketiga cara tersebut juga dapat digunakan pada sebuah method atau function.
*/