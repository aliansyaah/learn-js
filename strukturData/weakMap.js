/* 
    WeakMap merupakan varian dari Map yang mendukung garbage collection.
*/

// Contoh perbedaan Map dan WeakMap
// Map
let visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };

countUser(jonas);               // Menambahkan user "Jonas"
jonas = null;                   // Data object "Jonas" dihapus

console.log(visitsCountMap);
/* 
    Ketika reference objek jonas dihapus dengan mengubahnya menjadi null, seharusnya map tidak lagi menyimpan data user (garbage collected). Namun, kenyataannya data jonas masih tersedia di dalam Map. Artinya, data jonas masih tersimpan di dalam memori sampai kita benar-benar menghapusnya.
*/

// WeakMap
let visitsCountMap2 = new WeakMap(); // Menyimpan daftar user

function countUser2(user) {
    let count2 = visitsCountMap2.get(user) || 0;
    visitsCountMap2.set(user, count2 + 1);
}

let jonas2 = { name2: "Jonas" };

countUser2(jonas2);                // Menambahkan user "Jonas"
jonas2 = null;                    // Data object "Jonas" dihapus

console.log(visitsCountMap2);
/* 
    Ketika nilai jonas sudah tidak bisa dijangkau, object jonas akan dihapus dari memori termasuk informasi yang disimpan di dalam WeakMap.
*/