/* 
    1. Destructuring object
    Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.
*/
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

// Destructuring object
const {firstName, lastName, age} = profile;

// Sehingga variabel "firstName" akan berisikan nilai profile.firstName, "lastName" akan berisikan nilai profile.lastName, "age" akan berisikan nilai profile.age
console.log("\nDestructuring object: ");
console.log(firstName, lastName, age);


/* 
    2. Destructuring Assignment
    Pada contoh sebelumnya, kita telah melakukan destructuring object pada deklarasi variabel. Namun, pada kasus tertentu mungkin kita perlu melakukannya pada variabel yang sudah dideklarasikan.
*/
const profile2 = {
    firstName2: "John",
    lastName2: "Doe",
    age2: 18
}

let firstName2 = "Dimas";
let age2 = 20;

console.log("\nBefore destructuring assignment: ");
console.log(firstName2, age2);

// Menginisialisasi nilai baru melalui destructuring object
({firstName2, age2} = profile2);

console.log("\nDestructuring assignment: ");
console.log(firstName2, age2);


/* 
    3. Default values
    Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined.
*/
const profile3 = {
    firstName3: "John",
    lastName3: "Doe",
    age3: 18
}

// Mengisikan nilai default pada properti jika tidak ditemukan
const {firstName3, age3, isMale = false} = profile3;

console.log("\nDefault values: ");
console.log(firstName3, age3, isMale);

/* 
    4. Assigning to Different Local Variable Names
    Menggunakan penamaan variabel lokal yg berbeda dalam proses destrukturisasi object
*/

const profile4 = {
    firstName4: "John",
    lastName4: "Doe",
    age4: 18
}

const {firstName4: localFirstName, lastName4: localLastName, age4: localAge} = profile4;
console.log("\nAssign to different local variable names: ");
console.log(localFirstName, localLastName, localAge);