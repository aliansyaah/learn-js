/* 
    Dalam JavaScript sendiri terdapat built-in class bawaan, misalnya Date, Object, Array, Math, dan String. 
    Built-in class tersebut dapat digunakan untuk memanipulasi data-data terkait dengan array, perintah matematik, manipulasi karakter, dan manipulasi objek.
*/

// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate1 = new Date();
 
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const myDate2 = new Date("January 01, 2021");
 
// #3 parameter dalam bentuk number, misal 87400000
const myDate3 = new Date(87400000);
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
// const myDate4 = new Date(year,month,date,hour,minute,second,millisecond);

// console.log(myDate1);
// console.log(myDate2);
// console.log(myDate3);
// console.log(myDate4);

// getMonth Nilai kembaliannya adalah bulan dalam bentuk angka (0 sampai 11), 0 berarti Januari
console.log(myDate1.getMonth());
console.log(myDate1.getFullYear());
console.log(myDate1.getDate());
console.log(myDate1.getHours());
console.log(myDate1.getMinutes());
console.log(myDate1.getSeconds());

// getMilliseconds Nilai kembaliannya adalah mili-detik dari 0 to 999
console.log(myDate1.getMilliseconds());

// getTime Nilai kembaliannya adalah waktu dalam bentuk epoch mili-detik (dimulai dari 1 January, 1970 yang berarti 0)
console.log(myDate1.getTime());

// getDay Nilai kembaliannya adalah hari dalam seminggu dari 0 sampai 6. 0 berarti minggu
console.log(myDate1.getDay());

// Digunakan untuk mengubah tanggal dalam format string, menjadi epoch miliseconds
console.log(Date.parse("2021-01-01"));

// Digunakan untuk mengubah tanggal dalam format integer/number, menjadi epoch miliseconds
console.log(Date.UTC(2021, 01, 01));


/* 
    Berikut ini adalah kode misalkan kita ingin menghitung berapa umur kita dengan memanfaatkan object date.
*/
// Parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now();   // today menghasilkan nilai miliseconds saat ini
    
    const diff_ms = today - birtday.getTime();  // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);
    
    return diffDate.getFullYear() - 1970;   // 1970 adalah representasi 0 dari miliseconds
};

console.log("\nUmur:");
console.log(myAge('2000-01-22'));   // 22 tahun

console.log("\n");


// Selain Date, kita juga dapat menggunakan built-in class javascript yang lainnya.
const listOfContent = [1, 2, "President", {}];
console.log(Array.isArray(listOfContent)); 
// result is true
 
const splitText = "12:20:00".split(':');
console.log(splitText);
// result is [ '12', '20', '00' ]