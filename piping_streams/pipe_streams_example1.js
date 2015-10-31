var fs = require('fs');

var readableStream = fs.createReadStream('rawData.json');
var writableStream = fs.createWriteStream('rawDataCopy.json');

readableStream.pipe(writableStream);