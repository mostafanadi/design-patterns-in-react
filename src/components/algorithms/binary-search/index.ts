export const binarySearch = (arr: number[], element: number) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (element == arr[middleIndex]) {
      return arr[middleIndex];
    }
    if (startIndex >= endIndex && element != arr[middleIndex]) {
      return null;
    }
    if (element > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
};

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
