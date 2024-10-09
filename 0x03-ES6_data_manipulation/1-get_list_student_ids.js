export default function getListStudentIds(array) {
  if (typeof array !== 'object') {
    return [];
  }
  const newArray = array.map((value) => value.id);
  return newArray;
}
