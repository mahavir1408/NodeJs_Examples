var fs = require('fs');
var stream = fs.createWriteStream('out.txt');
stream.write('\nHello, Node.js!');
stream.write('\nWe are learning Streams.');
stream.end();
stream.on('finish',function(){
  console.log('All writes are now complete.');
});