// path module
const path = require('path');
const myPath = '/home/tahsin005/Downloads/Codes/Bits & Pieces/Mern Backend/Node JS/index.js';

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));










// os module
const os = require('node:os');

// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.cpus());












// file system - fs
const fs = require('fs');

// fs.writeFileSync('myfile.txt', 'Hello World!'); // writing in a file in synchronous way.. mean main thread is blocked while writing on this file.
// // fs.writeFileSync('myfile.txt', 'How you doin');
// fs.appendFileSync('myfile.txt', ' How you doin');

// const data = fs.readFileSync('myfile.txt');
// console.log(data.toString());

// fs.readFile('myfile.txt', (err, data) => {
//     console.log(data.toString());
// });
// console.log('--reading file in asyscronous way!!');












// event module
const EventEmitter = require('events');

const emitter = new EventEmitter();


// register a listener for bellRing event
// emitter.on('bellRing', ({ period, text }) => {
    //     console.log(`We need to run because ${period} ${text}`);
    // });

// // raise and event
// emitter.emit('bellRing', {
    //     period: 'first',
//     text: 'period ended'
// });

const School = require('../school');
const school = new School;

school.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod();