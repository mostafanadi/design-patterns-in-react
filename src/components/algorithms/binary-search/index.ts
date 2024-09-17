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

export const binarySearchRec = (
  arr: number[],
  element: number
): number | null => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

  if (element == arr[middleIndex]) {
    return startIndex;
  }
  if (startIndex >= endIndex && element != arr[middleIndex]) {
    return null;
  }
  if (element > arr[middleIndex]) {
    startIndex = middleIndex + 1;
    return binarySearchRec(arr.slice(startIndex, endIndex + 1), element);
  } else {
    endIndex = middleIndex - 1;
    return binarySearchRec(arr.slice(startIndex, endIndex), element);
  }
};

const arr = [1, 5, 9, 13, 99, 100];
console.log(binarySearchRec(arr, 99));
