/* 
    Static method adalah function atau method yang sama seperti class method, akan tetapi untuk mengaksesnya tidak perlu meng-instantiate class. Kita cukup menuliskan nama kelas dan nama method-nya secara langsung (NamaClass.namaMethod()).
*/

// Contoh, kita menambahkan sebuah method untuk memeriksa apakah sebuah input adalah nomor handphone
class Mail{
    static isValidPhone(phone) {
        return typeof phone === 'number';
    }
}
console.log(Mail.isValidPhone(089000000000))    // true