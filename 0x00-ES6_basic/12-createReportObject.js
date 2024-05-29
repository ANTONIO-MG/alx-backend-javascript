export function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: [...employees] };
}

// New function to create the report object
export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };
  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
