const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');
    
    // Split the file content by new lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }
    
    // Extract the headers
    const headers = lines[0].split(',');
    
    // Initialize a dictionary to store the students count by field
    const fieldCounts = {};
    const studentsByField = {};
    
    for (let i = 1; i < lines.length; i++) {
      const studentData = lines[i].split(',');
      
      // Skip if the line is not valid (not matching the headers count)
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
    
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
