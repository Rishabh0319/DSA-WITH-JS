

let arr = [32, 34, 6, 5, 3, 65, 8, 7, 67, 43, 1, 35, 4, 7, 65];

function firstOccurance(arr, idx, data) {

    if (arr.length === idx)
        return -1;

    if (arr[idx] === data)
        return idx;
    else {
        let subArrIdx = firstOccurance(arr, idx + 1, data);
        return subArrIdx;
    }
}


console.log(firstOccurance(arr, 0, 1));     //10
console.log(firstOccurance(arr, 0, 65));    // 5
console.log(firstOccurance(arr, 0, 19));    // -1
