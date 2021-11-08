const fs = require('fs');
const path = require('path');

try {
  
  const pathCurrentText = path.basename('./text.txt');
  const pathCurrentDir =path.dirname('./index');
  const pathStrText = path.resolve(__dirname, pathCurrentDir, pathCurrentText);

  const stream = fs.createReadStream(pathStrText, 'utf-8');
  stream.on('data', writeToConsole);
  
} catch (error) {
  console.log('неверный путь', error.message);
} 

function writeToConsole(partOfText) {
  console.log('\n', partOfText);
}