var fs = require('fs'); 
var output1 = fs.readFileSync('countries.txt','utf8'); 
console.log(output1); 
console.log("Hello World\n"); 
var output2 = fs.readFileSync('cities.txt','utf8'); 
console.log(output2); 
console.log("Hello again!");