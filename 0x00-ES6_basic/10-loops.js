export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const idx of array) {
    const value = array[idx];
    array2.push(`${appendString}${value}`);
  }

  return array2;
}
