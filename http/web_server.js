var http = require('http');
var server = http.createServer(function(request,response){
  if(request.url==='/favicon.ico'){
    response.writeHead(200,{
      'Content-Type': 'image/x-icon'
    });
    response.end();
    console.log('favicon request');
    return;
  }
  response.writeHead(200,{
    'Content-Type': 'text/plain'
  });
  response.write('Hello World\n');
  response.write('This is next line\n');
  response.end();  
});
server.listen(1234,'127.0.0.1');
console.log('Started Server at: '+new Date());
server.on('connection',function(socket){
  console.log('New connection started at: '+new Date());
});