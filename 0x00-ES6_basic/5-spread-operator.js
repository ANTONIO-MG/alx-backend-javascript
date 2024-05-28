export default function concatArrays(array1, array2, string) {
  const newString = [...array1, ...array2, ...string];
  return newString;
}
