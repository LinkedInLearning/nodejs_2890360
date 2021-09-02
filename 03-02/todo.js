

var filename = "todo.txt";

const args = process.argv.slice(2);

if (args[0] == "add") {
	// Hier den Text aus args[1] in Datei speichern
}

if (process.env.TODO_FILENAME != undefined) {
	filename = process.env.TODO_FILENAME;
}
console.log("Dateiname: " + filename);
