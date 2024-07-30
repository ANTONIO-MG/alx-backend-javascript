const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      console.log('Cannot load the database');
      throw new Error('Cannot load the database');
    }

    const fieldCounts = {};
    const studentsByField = {};

    for (let i = 1; i < lines.length; i += 1) {
      const studentData = lines[i].split(',');

      const firstName = studentData[0];
      const field = studentData[3];

      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        studentsByField[field] = [];
      }

      fieldCounts[field] += 1;
      studentsByField[field].push(firstName);
    }

    const totalStudents = Object.values(fieldCounts).reduce((acc, count) => acc + count, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, count] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${count}. List: ${studentsByField[field].join(', ')}`);
    }
  } catch (error) {
    console.log('Cannot load the database');
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
