const bubbleSort = (arr: number[]) => {
  arr.forEach((firstIterationItem, firstIterationIndex) => {
    for (let i = firstIterationIndex + 1; i < arr.length; i++) {
      let secondItem = arr[i];
      if (firstIterationItem < secondItem) {
        arr[firstIterationIndex] = secondItem;
        arr[i] = firstIterationItem;
      }
    }
  });
  return arr;
};

const w = bubbleSort([85, 65, 21, 5, 4, 96]);
console.log(w);
