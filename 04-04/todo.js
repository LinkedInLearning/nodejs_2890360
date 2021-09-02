const fs = require("fs");

var filename = "todo.txt";

if (process.env.TODO_FILENAME != undefined) {
	filename = process.env.TODO_FILENAME;
}

const args = process.argv.slice(2);

if (args[0] == "add") {
	// Aufgabe speichern:
	const fd = fs.openSync(filename, "a");
	fs.write(fd, args[1]+"\n", e => {if (e) console.error(e.message)});
	fs.closeSync(fd);
}

if (args[0] == "show") {
	// Alle Aufgaben ausgeben:
	
	fs.readFile(filename, 'utf8', (error, data) => {
		console.log(data);
	});
	console.log("TODO-Liste");
	
}

