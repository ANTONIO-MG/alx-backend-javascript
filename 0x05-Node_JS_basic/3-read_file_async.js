const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');

      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const headers = lines[0].split(',');

      const fieldCounts = {};
      const studentsByField = {};

      for (let i = 1; i < lines.length; i++) {
        const studentData = lines[i].split(',');

        if (studentData.length !== headers.length) continue;

        const firstName = studentData[0];
        const field = studentData[3];

        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          studentsByField[field] = [];
        }

        fieldCounts[field]++;
        studentsByField[field].push(firstName);
      }

      const totalStudents = Object.values(fieldCounts).reduce((acc, count) => acc + count, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, count] of Object.entries(fieldCounts)) {
        console.log(`Number of students in ${field}: ${count}. List: ${studentsByField[field].join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
