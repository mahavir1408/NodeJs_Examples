var request = require('request');
request('http://www.google.co.in',function(error,response,body){
  if(!error && response.statusCode==200){
    console.log(body); //Prints the google page html content
  }
});