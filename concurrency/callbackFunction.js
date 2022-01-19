/* Cara salah */
// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//     }, 3000);
//     return coffee;
// }
 
// const coffee = orderCoffee();
// console.log(coffee);

/* Cara benar */
// Tambahkan parameter dgn nama 'callback'
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        
        // Panggil atau gunakan callback yang diisikan dengan data yang akan dibawa (coffee) ketika task selesai dilakukan
        callback(coffee);
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});