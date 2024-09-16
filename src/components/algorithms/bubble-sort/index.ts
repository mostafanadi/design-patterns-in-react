const bubbleSort = (arr: number[]) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap adjacent elements if they are in the wrong order
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

const w = bubbleSort([7, 4, 5, 2]);
// const w = bubbleSort([85, 65, 21, 5, 4, 96]);
console.log(w);
