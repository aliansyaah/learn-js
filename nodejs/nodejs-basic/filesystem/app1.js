const fs = require('fs');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

/* Untuk mengakses berkas pada komputer kita dapat menggunakan method fs.readFile(). Method ini menerima tiga argumen yakni: lokasi berkas, encoding, dan callback function yang akan terpanggil bila berkas berhasil/gagal diakses. */
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);