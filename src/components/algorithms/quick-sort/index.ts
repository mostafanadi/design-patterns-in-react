const quickSort = (arr: (number | undefined)[]): (number | undefined)[] => {
  const coppiedArray = [...arr];
  if (coppiedArray.length <= 1) {
    return coppiedArray;
  }
  const smallArray = [];
  const bigArray = [];
  const pivotElement = coppiedArray.shift();
  const centerArray = [pivotElement];
  while (coppiedArray.length) {
    const currentElement = coppiedArray.shift();
    if (currentElement == pivotElement) {
      centerArray.push(currentElement);
    } else if (currentElement! > pivotElement!) {
      bigArray.push(currentElement);
    } else {
      smallArray.push(currentElement);
    }
  }
  const smallerSortedArray = quickSort(smallArray);
  const biggertSortedArray = quickSort(bigArray);
  return smallerSortedArray.concat(centerArray, biggertSortedArray);
};

const wed = quickSort([85, 65, 415, -95, 87, 1, 255, 6]);
console.log(wed);

// worst case O(n^2)
//average O(n * log n)
