
const fs = require('fs');

const read = fs.createReadStream("input.txt");
const write = fs.createWriteStream("output.txt");

read.pipe(write);
