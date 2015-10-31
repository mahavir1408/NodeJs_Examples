var fs = require('fs');
var stream = fs.createReadStream("rawData.json");
stream.on('data',function(dataChunk){
  console.log('---------Chunk Starts----------');
  console.log(dataChunk.toString());
  console.log('---------Chunk Ends----------');
  stream.pause();
  console.log('Stream Paused');
  setTimeout(function(){
    stream.resume();
  },1500);
});

stream.on('end',function(dataChunk){
  console.log('Reached EOF: No more data available!!');
});