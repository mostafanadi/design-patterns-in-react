export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle; // Target found, return its index
    } else if (arr[middle] < target) {
      left = middle + 1; // Search in the right half
    } else {
      right = middle - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 7;
const result = binarySearch(sortedArray, targetValue);

console.log(result); // Output will be 3 (index of 7 in sortedArray)

export function binarySearchRec(arr: any[], target: any) {
  function search(low: any, high: any) {
    if (low > high) {
      return -1; // Target not found
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] > target) {
      return search(low, mid - 1); // Search in the left half
    } else {
      return search(mid + 1, high); // Search in the right half
    }
  }

  return search(0, arr.length - 1); // Start with the full array
}

const arr = [1, 5, 9, 13, 99, 100];
console.log(binarySearchRec(arr, 99));
