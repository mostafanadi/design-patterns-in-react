function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>();

  return function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ): ReturnType<T> {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }

    const result = fn.apply(this, args); // Explicitly using the typed `this`
    cache.set(key, result);

    return result;
  } as T;
}

// Usage example
const slowFunction = function (num: number): number {
  console.log("Computing...");
  return num * 2;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computing... 10
console.log(memoizedFunction(5)); // Cached: 10
