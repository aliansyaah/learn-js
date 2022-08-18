/* 
    Mengimpor dan Mengekspor Lebih dari Satu Nilai

    Dalam melakukan impor dan ekspor nilai, kita bisa memanfaatkan object literal dan object destructuring agar dapat mengimpor dan mengekspor lebih dari satu nilai pada sebuah modul.
*/

const firstName = 'Harry';
const lastName = 'Potter';

/* Gunakan object literal untuk mengekspor lebih dari satu nilai */
module.exports = {firstName, lastName};