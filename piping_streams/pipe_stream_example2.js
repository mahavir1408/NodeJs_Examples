var fs = require('fs');
var zlib = require('zlib');
var readableStream = fs.createReadStream('rawData.json');
var writableStream = fs.createWriteStream('rawDataCopy.json.gz');

readableStream.pipe(zlib.createGzip()).pipe(writableStream);