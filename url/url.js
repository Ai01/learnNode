const url = require('url');
const assert = require('assert');

const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(myURL);
