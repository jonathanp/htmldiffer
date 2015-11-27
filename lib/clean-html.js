const tidy = require('htmltidy').tidy;

module.exports = html => (
  new Promise((resolve, reject) => {
    tidy(
      html,
      {
        'output-xml': true,
        doctype: 'html5',
        hideComments: true,
        wrap: 200
      },
      (err, html) => err ? reject(err) : resolve(html)
    );
  })
);
