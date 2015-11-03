var http = require('http');
var url = require('url');

var server = http.createServer();
server.on('request',function(request,response){
  if(request.method === 'GET'){
    var url_parts = url.parse(request.url,true);
    var query = url_parts.query;
    console.log(query);
  }
  //For post requests
  request.on('readable',function(){
    console.log('readable: '+request.read());
  });
});
server.listen(4321,'127.0.0.1');
console.log('Server started at:'+new Date());