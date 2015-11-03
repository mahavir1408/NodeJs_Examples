var http = require('http');
var server = http.createServer(function(request,response){
  if(request.url==='/favicon.ico'){
    response.writeHead(200,{'Content-Type': 'image/x-icon'});
    response.end();
    console.log('favicon request');
    return;
  }
  //Read request headers
  if(request.headers){
    console.log('Request Headers: '+request.headers);
    console.log('Accept Headers: '+request.headers.accept);
  }
  
  //Setting response
  var body = "Hello World";
  /*
  response.setHeader('Content-Length',body.length);
  response.setHeader('Content-Type','text/plain');
  response.statusCode=200;
  */
  response.writeHead(200,{
    'Content-Lenght': body.length,
    'Content-Type': 'text/plain'
  });
  response.end(body);
});
server.listen(5555,'127.0.0.1');
console.log('Started Server at: '+new Date());