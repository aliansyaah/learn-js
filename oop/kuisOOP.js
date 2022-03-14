/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string "${this.name} sedang makan!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// TODO
class Animal {
	// constructor() {
	constructor(name, age, isMammal) {
		this.name = '';
		this.age = 0;
		this.isMammal = false;
	}
}

class Rabbit extends Animal {
	constructor(name) {
		super();
		this.name = 'Labi';
		this.age = 2;
		this.isMammal = true;
	}
	eat() {
		// console.log(`${this.name} sedang makan!`);
		return `${this.name} sedang makan!`;
	}
}

class Eagle extends Animal {
	constructor(name) {
		super();
		this.name = 'Elo';
		this.age = 4;
		this.isMammal = false;
	}
	fly() {
		// console.log(`${this.name} sedang terbang!!`);
		return `${this.name} sedang terbang!`;
	}
}

const myRabbit = new Rabbit('Labi', 2, true);
const myEagle = new Eagle('Elo', 4, false);

console.log(myRabbit);
console.log(myRabbit.eat());
console.log(myEagle);
console.log(myEagle.fly());
