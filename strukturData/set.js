/* 
    Set
    Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.
*/

// Set akan otomatis membuang angka yg sama
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);

// Menambahkan data ke dalam set
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log("\nAdd 5, 10, 6: ");
console.log(numberSet);

// Delete data dari set
numberSet.delete(4);
console.log("\nDelete 4: ");
console.log(numberSet);