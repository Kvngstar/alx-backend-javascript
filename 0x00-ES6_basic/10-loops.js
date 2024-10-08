export default function appendToEachArrayValue(array, appendString) {
  let num = 0;

  for (const idx of array) {
    const value = idx;
    // eslint-disable-next-line no-param-reassign
    array[num] = appendString + value;
    num += 1;
  }

  return array;
}
