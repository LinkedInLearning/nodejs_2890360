
const fs = require("fs");

var filename = "todo.txt";

if (process.env.TODO_FILENAME != undefined) {
	filename = process.env.TODO_FILENAME;
}
console.log("Dateiname: " + filename);

const args = process.argv.slice(2);

if (args[0] == "add") {
	// Aufgabe speichern:
	const fd = fs.openSync(filename, "a");
	fs.writeSync(fd, args[1]+"\n");
	fs.closeSync(fd);
}

if (args[0] == "show") {
	// Alle Aufgaben ausgeben:
	
	try {
		const data = fs.readFileSync(filename, "utf8");
		console.log(data);
	}
	catch(error) {
		console.error(error.message);
	}
	
}

