const mergeSort = (arr: number[]): number[] => {
  let copiedArray = [...arr];
  const middleIndex = Math.floor(copiedArray.length / 2);
  if (copiedArray.length == 1) {
    return copiedArray;
  }
  if (copiedArray.length == 2) {
    return copiedArray[0] > copiedArray[1]
      ? [copiedArray[1], copiedArray[0]]
      : copiedArray;
  }

  const firstHalf = mergeSort(copiedArray.slice(0, middleIndex));
  const secondHalf = mergeSort(copiedArray.slice(middleIndex));
  let firsthalfIndex = 0;
  let secondHalfIndex = 0;
  const finalArray: number[] = [];

  while (
    firsthalfIndex < firstHalf.length ||
    secondHalfIndex < secondHalf.length
  ) {
    if (
      firsthalfIndex >= firstHalf.length ||
      firstHalf[firsthalfIndex] > secondHalf[secondHalfIndex]
    ) {
      finalArray.push(secondHalf[secondHalfIndex]);
      secondHalfIndex++;
    } else {
      finalArray.push(firstHalf[firsthalfIndex]);
      firsthalfIndex++;
    }
  }
  return finalArray;
};

const wdqsd = mergeSort([54, 69, 85, 125, 457, 985, 356, 10, 2]);
console.log(wdqsd);
