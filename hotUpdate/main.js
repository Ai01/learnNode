// main.js
function cleanCache (module) {
 var path = require.resolve(module);
	console.log(require.cache);
// require.cache[path] = null;
}
 
setInterval(function () {
 cleanCache('./code.js');
 var code = require('./code.js');
 console.log(code);
}, 5000);

