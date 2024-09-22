function binarySearch(arr, target) {
    function search(low, high) {
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

// Example usage
// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// const target = 9;
// const result = binarySearch(sortedArray, target);

// if (result !== -1) {
//     console.log(`Element found at index ${result}`);
// } else {
//     console.log('Element not found');
// }



const bubbleSort = (arr) => {
    let swap
    do {
        swap = false
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
            const nextItem = arr[i + 1]
            if (nextItem > item) {
                [arr[i], arr[i + 1]] = [nextItem, item]
                swap = true
            }
        }
    } while (swap);
    return arr
}

// console.log(bubbleSort([2, 80, 65, 41, 20, 36, 789]))
const merge = (arr1, arr2) => {
    let [arr1Index, arr2Index] = [0, 0];
    const result = [];
    while (arr1Index < arr1.length && arr2Index < arr2.length) {
        if (arr1[arr1Index] > arr2[arr2Index]) {
            result.push(arr1[arr1Index]);
            arr1Index++
        } else {
            result.push(arr2[arr2Index])
            arr2Index++
        }
    }
    return result.concat(arr1.slice(arr1Index)).concat(arr2.slice(arr2Index));
    // return result
}
const mergeSort = (arr) => {
    const m = Math.floor(arr.length / 2);
    if (arr.length <= 1) {
        return arr
    };
    const lArr = mergeSort(arr.slice(0, m))
    const rArr = mergeSort(arr.slice(m))
    return merge(lArr, rArr)

}

// console.log(mergeSort([2, 50, 68, 784, 10, 2, 56]))

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    let p = arr[arr.length - 1]
    let l = arr.filter(item => item < p)
    let r = arr.filter(item => item > p)
    let m = arr.filter(item => item == p)
    return [...quickSort(l), ...quickSort(m), ...quickSort(r)]

}
// console.log(quickSort([2, 50, 64, 87, 1, 32, 0, 65, 8]))

const memoize = (fn) => {

    const cashed = {}
    return (...rest) => {
        if (cashed[JSON.stringify(...rest)]) {
            console.log("reading from cash")
            return cashed[JSON.stringify(...rest)]
        } else {
            console.log("not in cash")
            const result = fn(...rest)
            cashed[JSON.stringify(...rest)] = result
            return result
        }
    }
}

const add = (a, b) => a + b

const cashedAdd = memoize(add)
console.log(cashedAdd(5, 4))
console.log(cashedAdd(5, 4))