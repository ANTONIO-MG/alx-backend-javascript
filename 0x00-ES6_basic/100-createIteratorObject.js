export function createEmployeesObject(departmentName, employees) {
    return { [departmentName]: [...employees] };
  }
  
  export function createReportObject(employeesList) {
    const allEmployees = { ...employeesList };
  
    return {
      allEmployees,
      getNumberOfDepartments() {
        return Object.keys(this.allEmployees).length;
      },
    };
  }
  
  // Function to create the iterator object
  export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    const employeesArray = [];
  
    // Collect all employees into a single array
    for (const department of Object.values(allEmployees)) {
      employeesArray.push(...department);
    }
  
    // Return an iterable object
    return {
      [Symbol.iterator]() {
        let index = 0;
  
        return {
          next() {
            if (index < employeesArray.length) {
              return { value: employeesArray[index++], done: false };
            }
            return { value: undefined, done: true };
          }
        };
      }
    };
  }