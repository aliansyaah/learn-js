/* 
    Object composition adalah prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class.
    
    Prinsip ini didasarkan pada kumpulan perilaku (method/function) yang sudah kita definisikan
    Sehingga, ketika ingin membuat alur bisnis lain dengan beberapa perilaku (method) yang sama, kita dapat menggunakan fungsi yang sudah ada tanpa melakukan inheritance/pewarisan.

*/

// Contoh: hirarki class Mail yang sudah kita buat sebelumnya, kita akan merombak dan membuatnya dgn pendekatan object composition.

/* 
    [1] List of abstractions
    Kita membuat sebuah abstraksi untuk method-method yang umum digunakan (di sini misalkan method mengirim pesan, dan validasi nomor hp).
*/
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
});

/* 
    [2] crate object composition
    Kita membuat sebuah kelas baru dengan nama personalEnterprise, di mana seperti biasa kita dapat menggunakan parameter yang akan digunakan.
*/
const personalEnterprise = (from, message, store) => {
    /* 
        [3] attributes
        Pada  object composition ini, penggunaan parameter biasa digunakan untuk mendaftarkan attribute-attribute dari kelas tersebut. Pada contoh di bawah, kita mengumpulkan attribute tersebut pada konstanta bernama self.
    */
    const self = {
        from,
        message,
        store
    };

    /* 
        [4] method
        Kita dapat juga menambahkan method/fungsi yang spesifik hanya ada pada kelas tersebut (kapabilitasnya hanya pada kelas tersebut / tidak umum).
    */
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created: ', self.store)
    });

    /* 
        [5] create object composition
        Proses pembuatan object dengan perintah Object.assign(attribute, method1, method2, methodN).
    */
    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'Hei produk baru nih', 'Dicoding Store');
pe1.createCatalog();    //Catalog has created:  Dicoding Store
pe1.sendMessage();  //send message: hei produk baru nih
pe1.isValid();

/* 
    Dari contoh kode di atas maka kita dapat membuat sebuah object dengan nama personalEnterprise tanpa harus melakukan pewarisan.
*/