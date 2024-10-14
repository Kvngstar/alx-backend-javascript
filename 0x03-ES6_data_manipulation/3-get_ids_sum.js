export default function getStudentIdsSum(students) {
  return students.reduce((agg, current) => agg + current.id, 0);
}
