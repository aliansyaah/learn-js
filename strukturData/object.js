// Object berisi pasangan KEY dan VALUE yang juga dikenal dengan PROPERTY
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine",
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

// Untuk mengakses key yang memiliki spasi atau karakter khusus lainnya maka kita perlu menggunakan bracket
console.log("\nMengakses key yang memiliki spasi: ");
console.log(`Saya berasal dari ${user["home world"]}`);


// Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=)
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

// Menginisialisasi ulang variabel dari object
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";

console.log("\nMengubah nilai properti di dalam object: ");
console.log(spaceship);

// Mengubah nilai object (akan error)
// spaceship = { name: "New Millenium Falcon" };

// Menghapus property pada object
delete spaceship.manufacturer;
console.log("\nMenghapus nilai properti dari dalam object: ");
console.log(spaceship);