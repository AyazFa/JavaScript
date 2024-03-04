const fs = require('fs');
const { Transform } = require("stream");
const fileName = process.argv[2];

const readableStream = fs.createReadStream(fileName, "utf-8");
const transformedData = fs.createWriteStream(`transformed_${fileName}`)

const processData = new Transform({
  transform(chunk, encoding, callback){
    const transformResult = processChunk(chunk);
    callback(null, transformResult);
  },
});

function processChunk(chunk) {
  const counts = [];
  const line = chunk.toString();
  const array = line.replace(/[^a-zA-Z]+/g, ' ').split(' ').sort();
  array.forEach(function(element) {
    counts[element] = (counts[element] || 0) + 1;
  });
  return counts.toString();
}

readableStream.pipe(processData).pipe(transformedData);