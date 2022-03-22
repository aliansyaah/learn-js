/* 
	Paradigma Functional Programming adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni. FP ditulis dengan gaya deklaratif yang berfokus pada “what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.
*/

// Array names
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// Gaya imperatif
const newNamesWithExcMark1 = [];
for(let i = 0; i < names.length; i++) {
  	newNamesWithExcMark1.push(`${names[i]}!`);
}
console.log(newNamesWithExcMark1);
/* 
	Contoh kode di atas merupakan salah satu gaya penulisan kode IMPERATIF, di mana proses pengisian nilai array baru (newNames) berdasarkan array lama (names) dilakukan secara manual.

	Inilah maksud dari “how to solve”, di mana kita perlu memikirkan bagaimana cara melakukan perulangannya (for); kapan perulangannya harus berhenti (i < names.length); bagaimana cara memasukkan nilai baru ke dalam array (newNamesWithExcMark1.push). Sangat melelahkan.
*/

// Gaya deklaratif
const newNamesWithExcMark2 = names.map((name) => `${name}!`);
console.log(newNamesWithExcMark2);
/* 
	Tidak ada proses looping manual; Tidak perlu tahu kapan harus berhenti dari looping; Kita cukup fokus pada “what to solve” alias apa yang ingin kita selesaikan atau capai.
*/

