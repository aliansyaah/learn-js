/* 
    Node Package Manager
    Terdapat dua tipe pemasangan modul melalui NPM: yakni global dan lokal. Bila modul dipasang secara global, maka modul tersebut akan bersifat layaknya core module dan dapat digunakan di mana pun. Sedangkan modul yang dipasang secara lokal hanya dapat digunakan pada cakupan project Node.js yang memasangnya saja.
*/

// MomentJS merupakan salah satu modul pihak ketiga yang populer untuk mengelola waktu di Nodejs
const moment = require('moment');

const date = moment().format("MMM Do YY");
console.log(date);

/* 
    Package yang dipasang secara lokal melalui NPM akan tercatat di dalam berkas package.json, lebih tepatnya pada objek dependencies.
    Ini menunjukkan bahwa proyek Node.js Anda memiliki ketergantungan atau dependencies terhadap module moment. 
    Informasi ini berguna bila Anda hendak membagikan proyek Node.js ke orang lain. Mereka akan mengetahui modul pihak ketiga apa yang akan diinstal ketika memasang proyek Anda melalui perintah npm install.

    Untuk menghapus modul pihak ketiga, Anda bisa gunakan perintah npm uninstall <package-name>.
    Contoh: npm uninstall moment
*/

/* 
    NPM juga bisa berfungsi sebagai runner script. Ia dapat menjalankan script yang dituliskan pada objek scripts yang ada di berkas package.json. Dengan menetapkan script pada package.json, Anda dapat membuat jalan pintas untuk menjalankan Node.js process. Selain itu, Anda bisa membuat lebih dari satu script sesuai dengan environment yang Anda inginkan.
    Contoh: npm run start-dev
*/