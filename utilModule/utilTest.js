const util = require('util');

// debuglog

const debuglog = util.debuglog('foo');

debuglog('hello');


// deprecate

exports.puts = util.deprecate(function() {
  for (let i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(arguments[i] + '\n');
  }
}, 'util.puts: Use console.log instead');


// inspect

const obj = {
	name: 'father',
	children: [
		{
			name: 'child1',
			children: [{
				name: 'child2',
			}]
		}
	],
};
console.log(util.inspect(obj, { showHidden: true, depth: null, colors: true }));


