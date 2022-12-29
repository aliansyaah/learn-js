/* 
    Javascript bukanlah class-based programming languages. Sebelum hadirnya sintaks ES6, di javascript tidak mengenal sintaks "class". Namun di javascript tetap bisa menerapkan "class" dengan menggunakan sintaks "function".

    Semenjak ada sintaks javascript modern (ES6), javascript bisa membuat class dengan sintaks "class". Hal ini membuat penerapan OOP di javascript bisa mirip dengan bahasa pemrograman berbasis class. Ia hadir untuk mempermudah penerapan OOP bagi developer yang memiliki latar belakang class-based language.

    Tetapi ini tidak membuat javascript menjadi class-based language. Faktanya, sintaks class di JavaScript hanyalah syntactic sugar atau cara alternatif dalam mendefinisikan constructor function. Untuk membuktikan hal tersebut, kita bisa mengecek tipe class melalui operator typeof.

    Class sendiri dalam paradigma OOP secara teknis merupakan sebuah blueprint dalam mendefinisikan karakteristik dari sebuah objek. Object adalah instance dari sebuah class. 

    Di dalam sebuah class, dapat terdiri dari properti dan method. Properti merupakan karakteristik dari class, sedangkan method adalah kapabilitas atau kemampuan yang dimiliki oleh class.

    Untuk penulisan CLASS di JavaScript sendiri bisa menggunakan DUA CARA, yakni melalui sintaks FUNCTION ataupun CLASS.
*/

// 1. Membuat class menggunakan sintaks FUNCTION
console.log("\n1. Menggunakan sintaks FUNCTION:");

// a. Menggunakan pendekatan prototype
function Mail1a() {
    this.from = 'pengirim@dicoding.com';
};

Mail1a.prototype.sendMessage = function n(msg, to) {
    console.log("\na. Dengan pendekatan prototype:");
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

// Pemanggilan
const mail1a = new Mail1a();
mail1a.sendMessage('hallo', 'penerima@dicoding.com');

// ========== //

// b. Tanpa pendekatan prototype
function Mail1b(){
    this.from = 'pengirim@dicoding.com',
    this.sendMessage = function(msg, to) {
        console.log("\nb. Tanpa pendekatan prototype:");
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};

// Pemanggilan
const mail1b = new Mail1b();
mail1b.sendMessage('hallo', 'penerima@dicoding.com');

/* 
    ==========
    PERBEDAAN 
    ========== 
*/
console.log("\nPERBEDAAN");

// Menggunakan prototype
const mail1a1 = new Mail1a();
mail1a1.hasOwnProperty('sendMessage');

console.log("a. Menggunakan pendekatan prototype:");
console.log(mail1a1.hasOwnProperty('sendMessage'));

// ========== //
 
// Tanpa prototype
const mail1b1 = new Mail1b();
mail1b1.hasOwnProperty('sendMessage');

console.log("\nb. Tanpa pendekatan prototype:");
console.log(mail1b1.hasOwnProperty('sendMessage'));

// ========== //

/* 
    Ketika kita meng-instantiate objek-objek lain, objek yang menggunakan prototype tidak meng-copy atribut sendMessage ke setiap objek-objek. 
    Berbeda ketika kita tidak menggunakan prototype, semua attribute di-copy ke setiap objek. Dengan demikian, penggunaan prototype dapat menghemat alokasi memori yang digunakan.
*/


// 2. Membuat class menggunakan sintaks CLASS
class Mail2 {
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
 
    sendMessage(msg, to) {
        console.log("\n2. Menggunakan sintaks CLASS:");
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    };
}
 
const mail2 = new Mail2();
mail2.sendMessage('hallo', 'penerima@dicoding.com');

/* 
    Cara kedua pada dasarnya menggunakan PROTOTYPE, penggunaan sintaksis class pada javascript hanyalah "syntatic sugar" dari prototype itu sendiri. Demikianlah cara umum yang digunakan untuk menuliskan dan menginstansiasi objek dari sebuah Class.
*/