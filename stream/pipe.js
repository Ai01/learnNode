Readable.prototype.pipe = function (writable, options) {
  this.on('data', (chunk) => {
    let ok = writable.write(chunk);
    if(!ok) this.pause();
  })

  writable.on('drain', () => {
    this.resume();
  })

  writable.emit('pipe', this);

  return writable;
}
