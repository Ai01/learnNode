process.on('message',function(m){
	console.log('message in hai',m);
})
process.send({foo:'foo'});
