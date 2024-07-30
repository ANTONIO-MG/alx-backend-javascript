const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
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

      fieldCounts[field]+= 1;
      studentsByField[field].push(firstName);
    }

    const totalStudents = Object.values(fieldCounts).reduce((acc, count) => acc + count, 0);
    let result = `Number of students: ${totalStudents}\n`;

    for (const [field, count] of Object.entries(fieldCounts)) {
      result += `Number of students in ${field}: ${count}. List: ${studentsByField[field].join(', ')}\n`;
    }

    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
