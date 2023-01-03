/* 
    Buat fungsi routes yang mengembalikan array.
    
    Mengapa fungsi? Mengapa tidak array langsung?
    Karena menggunakan plugin, kita akan menggunakan pendekatan yang berbeda. Kita tidak akan menggunakan fungsi-fungsi handler dari hasil impor secara langsung, melainkan handler yang akan digunakan pada route kali ini dimasukkan sebagai parameter fungsi. Inilah mengapa kita membuat fungsi yang mengembalikan array ketimbang membuat array secara langsung.

    Dengan menggunakan pendekatan seperti ini, berkas routes.js tidak perlu tahu dari mana handler berasal. Fungsi routes menjadi "pure function" karena tidak terikat pada sebuah objek secara langsung.
*/
const routes = (handler) => [
    // Untuk masing-masing properti handler, tentu perlu diubah nilainya karena kita tidak lagi menggunakan fungsi handler lama
    {
        method: 'POST',
        path: '/notes',
        handler: handler.postNoteHandler, // postNoteHandler hanya menerima dan menyimpan "satu" note.
    },
    {
        method: 'GET',
        path: '/notes',
        handler: handler.getNotesHandler, // getNotesHandler mengembalikan "banyak" note.
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: handler.getNoteByIdHandler, // getNoteByIdHandler mengembalikan "satu" note.
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: handler.putNoteByIdHandler, // putNoteByIdHandler hanya menerima dan mengubah "satu" note.
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: handler.deleteNoteByIdHandler,
    },
];

/* 
    Dalam penetapan handler, ada dua hal yang berubah, yakni:
    1. Menggunakan fungsi yang merupakan member dari objek handler (parameter).
    2. Penamaan dari fungsi handler-nya.
    
    Lihatlah bagaimana penamaan fungsi handler berubah. Contohnya dari addNoteHandler menjadi postNoteHandler, atau editNoteByIdHandler menjadi putNoteByIdHandler.

    Mulai saat ini kita akan coba menetapkan standar pada penamaan dari fungsi handler. Pemberian nama fungsi handler diambil dari kombinasi method, kemudian path, dan diakhiri dengan kata "Handler". Bila di path mengandung parameter, kita bisa kombinasikan juga parameter tersebut sesuai dengan penggunaannya.
    Perhatikan juga bahwa penggunaan kata plural dan singular perlu disesuaikan (note atau notes)
*/

module.exports = routes;