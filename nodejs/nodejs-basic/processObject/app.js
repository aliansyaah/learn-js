/* 
    Contoh 1
    Cara test: NODE_ENV=production node app.js
*/
class Server {
    constructor(args){
        this.host = args;
        this.env = args.host;
        this.test = "Bebek Bakar Madu";
    }
}

const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});

console.log(server.host);
console.log(server.env);
console.log(server.test);


/* 
    Contoh 2:
    Cara test: node app.js harry potter
*/
const cpuInformation = process.memoryUsage();
console.log(cpuInformation);

const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);


/* 
    Cara test semua: 
    NODE_ENV=production && node app.js harry potter
*/
