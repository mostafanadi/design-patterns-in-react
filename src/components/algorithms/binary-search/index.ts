export const binarySearch = (arr: number[], element: number) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (element == arr[middleIndex]) {
      return arr[middleIndex]
    }
    if (element > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }

  }
}

const arr = [-1, 2, 5, 98, 125, 265, 748]
console.log(binarySearch(arr, 90))