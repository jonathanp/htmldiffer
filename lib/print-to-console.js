const xPathToCss = require('xpath-to-css');

const highlight = str => `\x1b[35m${str}\x1b[0m`;

module.exports = diffs => {
  if (!diffs.length) {
    console.log('The files are identical');
  }

  diffs.forEach(diff => {
    console.log(highlight(xPathToCss(diff.node)));
    console.log(diff.message);
    console.log(); // empty line
  });
};
