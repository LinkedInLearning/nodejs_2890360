const fs = require("fs");

var filename = "todo.txt";

if (process.env.TODO_FILENAME != undefined) {
	filename = process.env.TODO_FILENAME;
}

const args = process.argv.slice(2);

if (args[0] == "add") {
	// Aufgabe speichern:
	fs.open(filename, "a", (error, fd) => {
		fs.write(fd, args[1]+"\n", e => {
			if (e) console.error(e.message)
			else {
				fs.close(fd, e => {if (e) console.error(e.message)} );
			}
		});
	});
}

if (args[0] == "show") {
	// Alle Aufgaben ausgeben:
	
	fs.readFile(filename, 'utf8', (error, data) => {
		if (error) console.error(error.message);
		else console.log(data);
	});
	console.log("TODO-Liste");
	
}

