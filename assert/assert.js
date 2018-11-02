const assert = require('assert');

assert.deepEqual({ a: 1 }, { a: '1' });
assert.deepStrictEqual({ a: 1 }, { a: '1' });
