export default function appendToEachArrayValue(array, appendString) {
  let num;

  for (const idx of array) {
    const value = idx;
    array[num] = appendString + value;
    num = num + 1;
  };

  return array;
}
