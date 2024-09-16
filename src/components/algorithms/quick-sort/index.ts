function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((item) => item < pivot);
  const right = arr.filter((item) => item > pivot);
  const middle = arr.filter((item) => item === pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage:
const sortedArray = quickSort([5, 3, 8, 4, 2]);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
