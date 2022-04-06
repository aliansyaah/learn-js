/* 
	JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data.

	Kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function.
*/

const hello = () => {
	console.log('Hello!')
};

const say = (someFunction) => {
	someFunction();
}

const sayHello = () => {
	return () => {
		console.log('Hello!');
	}
}

hello();
say(hello);
sayHello()();

/* 
	Karena dengan kemampuan First Class Functions-nya itu, kita dapat membuat Higher-Order Function secara mudah. Apa itu Higher-Order Function?

	Higher-Order Function menjadi bagian konsep pada paradigma FP. Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

	Array map() merupakan salah satu contoh Higher-Order Function yang ada di JavaScript. Karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function.
*/

// Membuat fungsi map() versi sendiri dgn konsep higher-order function
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const arrayMap = (arr, action) => {
	console.log("==============================");
	console.log("arrayMap: ")
	console.log({arr, action});

	let i = 0;
	const loopTrough = (arr, action, newArray = [], index = 0) => {
		console.log("----------");
		console.log("\nPerulangan ke-"+i)
		console.log("loopTrough: ")
		console.log({arr, action, newArray, index});

		// Proses memasukkan array names ke array item
		const item = arr[index];
		console.log("item: "+item);

		// Jika sudah tidak ada item lagi, return newArray
		if(!item) return newArray;
		// console.log("=====");
		console.log("loopTrough2: ")
		console.log(loopTrough(arr, action, [...newArray, action(arr[index])], index + 1));
		// console.log("\n\n")

		i++;
		console.log("==========")
		return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
	}

	console.log("Nyampe sini");
	return loopTrough(arr, action);
}

const newNames = arrayMap(names, (name) => `${name}!`);

console.log("\nHigher-order: ")
console.log({
	names,
	newNames,
});