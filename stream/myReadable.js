const {
  Readable
} = require('stream');

class MyReadable extends Readable {
  constructor(dataSource, options) {
    super(options);
    this.dataSource = dataSource;
  }


  _read() {
    const data = this.dataSource.makeData();
    this.push(data);
  }

}

const dataSource = {
  data: new Array('aaaaaaaaabaaaaaaaaaaaaaaa', 'b'),
  makeData: function () {
    if (!this.data.length) return null;
    return this.data.pop();
  }
}

const myReadable = new MyReadable(dataSource);
myReadable.setEncoding('utf8');
myReadable.on('data', (chunk) => {
  console.log(chunk);
});

// myReadable.on('data', (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data.`);
//   myReadable.pause()
//   console.log('pausing for 1 second')
//   setTimeout(()=>{
//       console.log('now restart')
//       myReadable.resume()
//   }, 1000)
// });
