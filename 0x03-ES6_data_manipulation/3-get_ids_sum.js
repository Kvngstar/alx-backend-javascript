export default function getStudentIdsSum(students) {
  return students.reduce((agg, current) => agg + current), 0);
}
