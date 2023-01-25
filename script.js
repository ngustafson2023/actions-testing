const fs = require('fs');
fs.writeFile("./text.txt", 'test', "utf8", err => {
  if (err) console.log(err);
});