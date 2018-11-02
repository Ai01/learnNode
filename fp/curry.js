// var curry = function(func){
//   var args = [].slice.call(arguments,1);
//   return function(){
//     var newArgs = args.concat([].slice.call(arguments));
//     return func.apply(this,newArgs);
//   }
// }
//
//
// function add(a, b) {
//   return a + b;
// }
//
// var addCurry = curry(add, 1);
//
// var res = addCurry(2);
//
// console.log(res);

function a(){
  console.log(arguments);
  console.log(this);
}

a.apply(null, [1]);


function add(){
  var args = [].slice.call(arguments);
  var fn = function(){
    var newArgs = args.concat([].slice.call(arguments));
    return add.apply(null,newArgs);
  }
  fn.toString = function(){
    return args.reduce(function(a, b) {
      return a + b;
    })
  }
  return fn ;
}

console.log(add(1)(2,3).toString());
console.log(add(1)(2)(4).toString());
