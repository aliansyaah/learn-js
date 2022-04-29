/* 
    ES 6 Module
    Untuk melakukan export dan import module JavaScript, ada dua cara yang bisa kita gunakan. Sebelumnya kita telah mempelajari salah satu cara yaitu format CommonJS yang berjalan di lingkungan Node.js. Sejak ES6, JavaScript memiliki sistem modular secara native. Karena itu, sistem ini dapat dijalankan baik pada environment Node.js maupun browser.

    Pada Node.js sebelumnya tidak ada perbedaan antara export satu atau beberapa nilai. Semua nilai yang akan diekspor dijadikan nilai dari properti module.exports. Pada ES6 module, jika kita hanya mengekspor satu nilai pada sebuah berkas JavaScript baik itu primitive value, function, array, object, atau class, kita gunakan keyword "export default".
*/

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};

/* ===== 1. Export 1 value/nilai ===== */
// Mengekspor satu nilai menggunakan default export
export default coffeeStock;
