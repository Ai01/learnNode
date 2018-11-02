const dns = require('dns');

dns.lookup('web-alpha.blacklake.cn', (err, address, family) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(address, family);
});
