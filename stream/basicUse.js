const fs = require('fs');

fs.createReadStream('./myReadable.js').pipe(process.stdout);
fs.createWriteStream('./text.txt').write('hello');
