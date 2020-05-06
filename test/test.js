const { memory, runtime } = require('../src/index')


// Testing merge sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    let left = mergeSort(leftArr)
    let right = mergeSort(rightArr)

    return merge(left, right);
}

function merge(left, right) {
    let merged = [];

    while (left.length && right.length != 0) {
        if (left[0] > right[0]) {
            merged.push(right.shift());
        }
        else {
            merged.push(left.shift());
        }
    }
    return merged.concat(left).concat(right)
}



function populateArray(n) {
    const array = []

    for (let i = 0; i < n; i++) {
        const random = Math.floor((Math.random() * 1000) + 1);
        array.push(random);
    }

    return array
}


const randomArray = populateArray(100000);

// MergeSort tests
console.log(memory.memoryUsage(() => mergeSort(randomArray)))
console.log(runtime.executionTime(() => mergeSort(randomArray)))

// console.log(runtime.systemRuntime(100))
// console.log(mergeSort(randomArray));
