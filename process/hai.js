process.on('message',(m)=>{
  console.log('message in hai',m);
});
process.send({foo:'bar'});
