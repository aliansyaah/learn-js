/* 
    Perhatikan nilai parameter yang diberikan pada require(). Parameter merupakan lokasi dari module target impor. Ingat! Jika kita hendak mengimpor modul lokal (local module), selalu gunakan tanda ./ di awal alamatnya.
*/
const coffee = require('./coffee');

console.log(coffee);