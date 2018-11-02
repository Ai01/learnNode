const { fork } = require('child_process');
const n = fork('./hai.js');
n.on('message',(m)=>{
	console.log('message in fork',m);
})
n.send({hello:'world'});
