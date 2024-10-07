export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array.keys()) {
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
