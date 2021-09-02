


process.argv.forEach((v,i) => {
	console.log(`${i} ${v}`);
});

const args = process.argv.slice(2);

if (args[0] == "add") {
	// Hier den Text aus args[1] in Datei speichern
}

