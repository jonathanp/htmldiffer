const fs = require('fs');

module.exports = filename => (
  new Promise((resolve, reject) => {
    fs.readFile(
      filename,
      'utf8',
      (err, content) => err ? reject(err) : resolve(content)
    );
  })
);
