const fs = require('fs');

console.log("Start reading the file...");

// Asynchronous file reading (non-blocking)
fs.readFile('demo.text', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Done reading the file.");
