export default function getStudentsByLocation(studentList, city) {
  const studentInCity = studentList.filter((value) => value.location === city);
  return studentInCity;
}
