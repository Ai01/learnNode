const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('testEvent', () => {
  console.log('test');
});
emitter.on('testEvent', () => {
  console.log('test1');
});
emitter.on('testEvent', async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  }).then((res) => {
    console.log(res);
  })
});


emitter.emit('testEvent');
console.log('end');
