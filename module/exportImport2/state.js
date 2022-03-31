/* 
    Export Beberapa Nilai pada NodeJS
    Pada materi exportImport1 kita telah mengetahui cara export nilai dari suatu berkas JavaScript. Lantas bagaimana jika kita perlu meng-export beberapa nilai sekaligus?
*/

// Mari kita contohkan dengan menambahkan variabel isCoffeeMachineReady pada berkas state.js seperti berikut:
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMachineReady = true;

// Export satu nilai tapi menggunakan object literals ({})
module.exports = {coffeeStock, isCoffeeMachineReady};
// console.log(module);
