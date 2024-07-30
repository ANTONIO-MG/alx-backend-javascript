import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];

    readDatabase(filePath)
      .then((fields) => {
        let response = 'This is the list of our students\n';
        const sortedFields = Object.keys(fields)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        sortedFields.forEach((field) => {
          response += `Number of students in ${field}: ${fields[field].length}. `;
          response += `List: ${fields[field].join(', ')}\n`;
        });

        res.status(200).send(response.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(filePath)
      .then((fields) => {
        const students = fields[major];
        if (students) {
          res.status(200).send(`List: ${students.join(', ')}`);
        } else {
          res.status(200).send('List: ');
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
