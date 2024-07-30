const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const databasePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databasePath)
    .then((studentInfo) => {
      res.send(`This is the list of our students\n${studentInfo}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
