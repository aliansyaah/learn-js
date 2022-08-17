const fs = require('fs');

/* Sebagai alternatif, Anda juga bisa gunakan method versi synchronous fs.readFileSync(). */
const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);