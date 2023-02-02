const fs = require('fs');

fs.writeFile("./trained-models-template/docs/_data/text.txt", 'test', "utf8", err => {
  if (err) console.log(err);
});