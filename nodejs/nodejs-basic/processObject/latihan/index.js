const initialMemoryUsage = process.memoryUsage();
const yourName = process.argv[2];
// const environment = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage();

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage.heapUsed} naik ke ${currentMemoryUsage.heapUsed}`);
// console.log(process.env);