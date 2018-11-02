const fs = require('fs');
const path = require('path');

const url = path.resolve('./a.txt');
const url1 = path.resolve('./b.js');

console.log(url);
console.log(url1);

//
// const file = fs.createReadStream(url, {
//   encoding: 'binary',
//   autoClose: true,
// });
//
// file.read();
// console.log(file.path);
//
// file.on('data', chunk => {
//   console.log('data', chunk);
// });
//
// file.on('end', () => {
//   console.log('end');
// })
//
// file.on('close', () => {
//   console.log('close');
// });
//
// file.on('error', e => {
//   console.log(e);
// })
//
//
// file.on('readable', (a) => {
//   console.log('readable');
//   file.read();
// })

const readA = () => {
  fs.readFile(url, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data.toString());
  });
};

const writeA = () => {
  fs.writeFile(url, 'hello baihaihui', err => {
    if (err) {
      console.log(err);
    }
    console.log('file save');
  });
};


readA();

setTimeout(writeA, 1000);

setTimeout(readA, 2000);
