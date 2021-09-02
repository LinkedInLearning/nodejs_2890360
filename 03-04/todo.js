
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
	
	const data = Buffer.alloc(1024);
	
	const fd2 = fs.openSync(filename, "r");
	fs.readSync(fd2, data);
	fs.closeSync(fd2);
	
	console.log(data.toString());
}
