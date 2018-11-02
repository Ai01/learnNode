const { exec } = require('child_process');
exec('echo test',(err,stdout,stderr)=>{
	console.log('err',err);
	console.log('stdout',stdout);
});
