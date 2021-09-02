
const fs = require('fs');

function show(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, 'utf8', (error, data) => {
			if (error) reject(error);
			else resolve(data);
		});
	});
}

show("todo.txt")
.then(data => console.log(data))
.catch(error => console.error(error));


