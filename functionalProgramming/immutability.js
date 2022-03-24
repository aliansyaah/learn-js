/* 
    Konsep yang kedua adalah immutability. Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat. Kontras dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat.

    Konsep immutability sangat kental pada paradigma FP. Anda bisa lihat sebelumnya pada contoh penggunaan array map. Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru.
*/

// Bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek?
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

console.log(user);

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);
console.log("Rename:")
console.log(user);

/* 
    Yup! Tujuan Anda memang tercapai namun itu bukanlah KONSEP dari PARADIGMA FP. 
    Bila Anda ingin menerapkan FP sepenuhnya, hindari cara seperti di atas. Lantas bagaimana solusinya?
    Sama seperti fungsi array map(), alih-alih MENGUBAH nilai OBJEK secara langsung, terapkan perubahan tersebut pada nilai return dalam OBJEK BARU.
*/
const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

// Object baru "newUser"
const newUser = createUserWithNewLastName('Potter', user);
console.log(newUser);

/* 
    Hasilnya sama kan? Selain itu, Anda juga bisa menyesuaikan nama fungsinya dari renameLastNameUser menjadi createUserWithNewLastName. 
    Hal itu perlu untuk mengindikasikan bahwa fungsi mengembalikan atau menghasilkan objek user baru.
*/
