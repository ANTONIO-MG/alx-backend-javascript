const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const databasePath = process.argv[2];

if (!databasePath) {
  console.error('Please provide the path to the database file as a command-line argument.');
  process.exit(1);
}

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databasePath)
    .then((studentInfo) => {
      res.type('text').send(`This is the list of our students\n${studentInfo}`);
    })
    .catch((error) => {
      res.type('text').send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
