export default function getListStudentIds(arr) {
  if (!(arr instanceof Array)) {
    return [];
  }
  return arr.map((element) => element.id);
}
