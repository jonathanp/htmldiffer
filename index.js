#!/usr/bin/env node

const cleanHtml = require('./lib/clean-html');
const compareDoms = require('./lib/compare-doms');
const createDom = require('./lib/create-dom');
const isUrl = require('is-url');
const printToConsole = require('./lib/print-to-console');
const readFile = require('./lib/read-file');
const readUrl = require('request-promise');

const readResource = resource => (isUrl(resource) ? readUrl : readFile)(resource);
const getDifferences = result => result.getDifferences();

if (process.argv.length < 4) {
  console.error('You need to provide a pair of URL\'s or files to compare');
} else {
  const resources = process.argv.slice(2, 4);

  Promise.all(resources.map(readResource))
    .then(content => Promise.all(content.map(cleanHtml)))
    .then(html => Promise.all(html.map(createDom)))
    .then(compareDoms)
    .then(getDifferences)
    .then(printToConsole)
    .catch(err => console.error(err.message));
}
