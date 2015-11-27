const compare = require('dom-compare').compare;

module.exports = (doms) => (
  new Promise(resolve => {
    resolve(compare(doms[0], doms[1], {
      stripSpaces: true,
      compareComments: false
    }));
  })
);
