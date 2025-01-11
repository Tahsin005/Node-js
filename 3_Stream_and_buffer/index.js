const http = require('http');
const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');

// ourReadStream.on('data', (chunk) => {
//     // console.log(chunk.toString());
//     console.log(chunk);
//     ourWriteStream.write(chunk);
// });

// console.log('hi');

// ourReadStream.pipe(ourWriteStream);

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

    myReadStream.pipe(res);
});

server.listen(3000);

console.log('listening on port 3000...');