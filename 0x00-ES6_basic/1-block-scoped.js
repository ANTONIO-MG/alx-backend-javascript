export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // check if task is true
    const task = false;
    // check if task is also true
    const task2 = true;
    return [task, task2];
  }

  return [task, task2];
}
