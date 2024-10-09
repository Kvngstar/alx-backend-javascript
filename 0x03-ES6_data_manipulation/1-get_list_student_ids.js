export default function getListStudentIds(array) {
  //  eslint-disable
  if (!Array.isArray(array)) {
    return [];
  }
  const newArray = array.map((value) => value.id);
  return newArray;
}
