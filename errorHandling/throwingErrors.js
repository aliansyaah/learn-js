/* Tidak error */
// let json = '{ "name": "Yoda", "age": 20 }';

/* Error */
// let json = '{ bad json }';

/* Undefined var user.name */
let json = '{ "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

console.log("----------");

/* Solusi menggunakan THROW (melemparkan error sehingga eksekusi kode akan masuk pada blok catch) */
let json2 = '{ "age": 20 }';
try {
    let user = JSON.parse(json2);
 
    if (!user.name) {
        // Membuat pesan error yg akan ditampilkan pada blok catch
        throw new SyntaxError("'name' is required.");
    }
 
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

console.log("----------");

/* Untuk menampilkan pesan eror sesuai eror yang muncul */
let json3 = '{ "name": "Yoda", "age": 20 }';
try {
    let user = JSON.parse(json3);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    // console.log(`JSON Error: ${error.message}`);

    // Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. 
    // Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}