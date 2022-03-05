/* 
    Property & Method Property
    Property adalah atribut dari sebuah objek.
*/

class Mail {
    constructor() {
        /* 
            this merupakan representasi bahwasanya variable yang ditunjuk adalah atribute yang bersifat global dan menempel dengan objek tersebut.
            Sehingga, variabel dapat diakses dari method ataupun property di dalam kelas tersebut dengan menambahkan this di depannya.
        */
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
        // this.yourOtherProperty = 'the values';
    }

    /* Menggunakan 'this.from' sbg variable global */
    // sendMessage(msg, to) {
    //     console.log(`you send: ${msg} to ${to} from ${this.from}`);
    //     this.contacts.push(to); // menyimpan kontak baru
    // };

    /* Menggunakan 'from' dari parameter fungsi */
    sendMessage(msg, to, from) {
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        console.log(`you send: ${msg} to ${to} from ${from}`);
        this.contacts.push(to); // menyimpan kontak baru
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');
/* 
    Jika kita ingin menginisialisasi ataupun mengakses sebuah attribute global dari sebuah kelas, maka harus menggunakan 'this.attributeName'.
*/