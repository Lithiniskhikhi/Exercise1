const { readFile, appendFile } = require('fs');

// Step 1: Read file contents
readFile('./data.TXT', 'UTF-8', (err, data) => {
  if (!err) {
    console.log(data);

    // Step 2: Append data to the file
    const contentToAppend = '\nThis text will be appended to the file.';
    appendFile('./data.TXT', contentToAppend, (err) => {
      if (!err) {
        console.log('Content successfully appended to the file.');
      } else {
        console.log('Error appending content to the file.');
      }
    });
  } else {
    console.log('Error reading the file. Please try again later.');
  }
});