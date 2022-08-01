/* for(let i = 1; 1 < 9; i+=2) {
    console.log(i);
} */

/* for(let i = 1; 1 < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
} */


/* let myVariable = 12;
myVariable = 30;
myVariable = 5;

console.log(myVariable); */


/* const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];
// phoneticAlphabet.push("Charlie");
phoneticAlphabet.splice(2, 0, "Charlie");
console.log(phoneticAlphabet); */


/* const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]); */


/* function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]); */


/* let myString = "";

try {
    myString += "a";
    throw Error();
} catch(e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error();
    myString += "d";
}

console.log(myString); */


/* function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!"); */


/* function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
    console.log(`You are logged in as ${value}`);
})
.finally(() => {
    console.log("Welcome!");
}); */