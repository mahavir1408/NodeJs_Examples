var fs = require('fs');

var output1 = fs.readFile('countries.txt','utf8', function(err,content){
   console.log(content);
});
console.log("Hello World!\n");
 
 
var output2 = fs.readFile('cities.txt','utf8', function(err,content){
   console.log(content);
});
console.log("Hello again!");
/*
var fs = require('fs');
console.log("Hello World!");
var output1 = fs.readFile('content.txt','utf8', function(err,content){
   console.log(content);
});
console.log("Hello again!");
*/