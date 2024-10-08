export default function createReportObject(employeesList) {
  const departmentProps = Object.keys(employeesList);

  return {
    allEmployees: employeesList,
    getNumberOfDepartments: () => departmentProps.length,
  };
}
