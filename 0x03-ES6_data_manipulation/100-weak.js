const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  const queries = weakMap.get(endpoint);
  if (!queries) {
    weakMap.set(endpoint, 1);
  } else if (queries >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, queries + 1);
  }
};

export { weakMap, queryAPI };
