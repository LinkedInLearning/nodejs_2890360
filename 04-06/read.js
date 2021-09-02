
const fs = require('fs');

fs.readFile("input.txt", "utf8", (error, data) => {
	fs.writeFile("output.txt", data, () => {});
});


