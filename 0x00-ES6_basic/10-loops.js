export default function appendToEachArrayValue(array, appendString) {
  const indexes = array.keys()
  let num = 0;

  for (let idx of array) {
    const value = array[num];
    array[num] = appendString + value;
    num++;
  }

  return array;
}
