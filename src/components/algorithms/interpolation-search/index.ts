function interpolationSearch(arr: number[], x: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && x >= arr[low] && x <= arr[high]) {
    // Avoid division by zero when arr[low] == arr[high]
    if (low === high) {
      if (arr[low] === x) return low;
      return -1;
    }

    // Estimate the position using the formula
    let pos =
      low +
      Math.floor(((x - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    // If the estimated position is the target
    if (arr[pos] === x) {
      return pos;
    }

    // If x is larger, x is in the upper part
    if (arr[pos] < x) {
      low = pos + 1;
    }
    // If x is smaller, x is in the lower part
    else {
      high = pos - 1;
    }
  }

  return -1; // Element not found
}
const wq = [1, 8, 99, 657, 784, 897, 2001];
console.log(interpolationSearch(wq, 2001));
