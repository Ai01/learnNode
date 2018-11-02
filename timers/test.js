console.log(1);


setImmediate(()=>{
	console.log(2);
})


setTimeout(()=>{
	console.log(3);
});


process.nextTick(()=>{
	console.log(4);
})
