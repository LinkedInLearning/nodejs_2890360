
const fs = require('fs/promises');

fs.readFile('todo.txt', 'utf-8') 
.then(data => console.log(data))
.catch(error => console.error(error));


