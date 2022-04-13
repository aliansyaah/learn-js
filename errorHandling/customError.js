/* 
    Setelah menangani eror, pada materi ini kita akan mempelajari bagaimana membuat eror sendiri. Ketika mengembangkan suatu aplikasi, akan ada banyak sekali kemungkinan munculnya eror. 
    
    Seringkali, kita membutuhkan kelas eror sendiri untuk menunjukkan kesalahan yang spesifik dan tidak tersedia dalam kelas Error bawaan dari JavaScript.

    Kita bisa membuat kelas Error kita sendiri dengan nama dan pesan yang lebih sesuai. 
    Kelas ini merupakan turunan dari kelas Error yang sudah ada.
*/

// Kelas ValidationError memiliki parameter constructor berupa message yang berisi pesan detail terkait erornya
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let json = '{ "age": 30 }';
// let json = '{ "name": "Ali", "age": 30 }';
 
try {
    let user = JSON.parse(json);
    
    /* 
        Awalnya, JSON.parse akan mengonversi data String menjadi object. Apabila format String tidak sesuai, maka fungsi tersebut akan melemparkan SyntaxError. 
        Meskipun format atau sintaksis dari json string sudah sesuai, tetap ada kemungkinan data di dalamnya tidak lengkap. 
        Saat ini kita masih menggunakan "SyntaxError" untuk menandai eror akibat data yang tidak lengkap, padahal secara sintaksis tidak ada masalah dari variabel json. Tentunya akan lebih baik jika kita punya Error yang lebih spesifik, bukan?
    */
    if (!user.name) {
        // throw new SyntaxError("'name' is required.");
        throw new ValidationError("'name' is required.");
    }

    if (!user.age) {
        // throw new SyntaxError("'age' is required.");
        throw new ValidationError("'age' is required.");
    }
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    // Penggunaan "instanceOf" akan memberikan hasil eror yang lebih detail dan sesuai dengan eror yang terjadi
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);

    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);

    } else if (error instanceof ReferenceError) {
        console.log(error.message);
        
    } else {
        console.log(error.stack);
    }
}