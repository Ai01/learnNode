const { execFile } = require('child_process');
const child = execFile('./test', [], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log('stdout',stdout);
});
