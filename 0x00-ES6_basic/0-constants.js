/**
  * function taskFirst to instantiate variables using const
  *
  * @returns {string} The desired string output.
  */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
  * function getLast to return a string
  *
  * @returns {string} The desired string output.
  */
export function getLast() {
  return ' is okay';
}

/**
  * function taskNext to combine strings
  *
  * @returns {string} The combined string output.
  */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
