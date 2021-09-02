
const fs = require('fs');
const { Transform } = require("stream");


class TransformUp extends Transform {
	_transform = (chunk, encoding, callback) => {
		this.push(chunk.toString().toUpperCase());
		callback();
	}
}

const read = fs.createReadStream("input.txt");
const write = fs.createWriteStream("output.txt");

const trans = new TransformUp();

read.pipe(trans).pipe(write);


