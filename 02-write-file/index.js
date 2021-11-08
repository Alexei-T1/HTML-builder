const fs = require('fs');

const path = require('path');
const placeAndName = path.join(__dirname, 'text.txt');

let data = '';

fs.writeFile(placeAndName, data, (err) => {
  if (err) throw err;
  console.log('введите текст!');
});

const output = fs.createWriteStream(placeAndName);

process.stdin.on('data', (input) => {
  if(input.toString().trim() == 'exit') process.exit();
  data += input.toString();
  output.write(data);
});

process.on('exit', () => console.log('До свидания!'));
process.on('SIGINT', () => {
  process.exit();
});
