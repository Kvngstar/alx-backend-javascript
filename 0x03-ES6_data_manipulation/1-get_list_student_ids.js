export default function getListStudentIds(array) {
  //  eslint-disable
  if (typeof array !== 'object') {
    return [];
  }
  const newArray = array.map((value) => value.id);
  return newArray;
}
