const DOMParser = require('xmldom').DOMParser;

module.exports = html => (
  new Promise(resolve => {
    resolve(new DOMParser().parseFromString(html, 'text/html'));
  })
);
