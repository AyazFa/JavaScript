const fs = require('fs');
const fileName = process.argv[2];

function read(filePath) {
  const readableStream = fs.createReadStream(filePath, "utf-8");

  readableStream.on('error', function (error) {
      console.log(`error: ${error.message}`);
  })

  readableStream.on('data', (chunk) => {
    console.log(processData(chunk));
  })
}

function processData(line) {
  const counts = [];
  const array = line.replace(/[^a-zA-Z]+/g, ' ').split(' ').sort();
  array.forEach(function(element) {
    counts[element] = (counts[element] || 0) + 1;
  });
  return counts; 
}

read(fileName);