#!/usr/bin/env node

const cleanHtml = require('./lib/clean-html');
const compareDoms = require('./lib/compare-doms');
const createDom = require('./lib/create-dom');
const printToConsole = require('./lib/print-to-console');
const readFile = require('./lib/read-file');

const getDifferences = result => result.getDifferences();

if (process.argv.length < 4) {
  console.error('You need to provide two files to compare');
} else {
  const files = process.argv.slice(2, 4);

  Promise.all(files.map(readFile))
    .then(content => Promise.all(content.map(cleanHtml)))
    .then(html => Promise.all(html.map(createDom)))
    .then(compareDoms)
    .then(getDifferences)
    .then(printToConsole)
    .catch(console.error);
}
