export default function createIteratorObject(report) {
  let employees = [];

  for (const x in report.allEmployees) {
    if (x) {
      employees = [...employees, ...report.allEmployees[x]];
    }
  }

  return employees;
}
