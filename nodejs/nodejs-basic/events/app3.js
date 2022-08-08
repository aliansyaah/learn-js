const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
// Atau kita juga bisa membuat satu fungsi khusus untuk menangani event. Biasanya fungsi ini memiliki nama 'handler' atau 'listener' pada akhir penamaanya.
 
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
 
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
