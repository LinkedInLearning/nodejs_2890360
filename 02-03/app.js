
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Wie heißen Sie? ', (name) => {
	console.log(`Hallo: ${name}`);
	rl.close();
});


