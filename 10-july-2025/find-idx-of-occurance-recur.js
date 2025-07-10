

let arr = [23, 51, 62, 36, 75, 51, 78, 96, 23, 74, 62, 50, 60, 50, 21, 33, 33];

// 96
// 33
// 51
// 420

function findIndexOfOccurance(arr, idx, data) {

    if (idx === arr.length - 1) {
        if (arr[idx] === data)
            return idx;
        else
            return -1;
    }

    let subIdx = findIndexOfOccurance(arr, idx + 1, data);

    if (subIdx === -1) {
        if (data === arr[idx])
            return idx;
        else
            return subIdx;
    } else if (data === arr[idx])
        return idx;
    else
        return subIdx;
}


console.log(findIndexOfOccurance(arr, 0, 96));      // 7
console.log(findIndexOfOccurance(arr, 0, 33));      // 15
console.log(findIndexOfOccurance(arr, 0, 51));      // 1
console.log(findIndexOfOccurance(arr, 0, 420));     // -1






//  Better Approach



function findIndexOfOccurance2(arr, idx, data) {
    if (arr.length === idx)
        return -1;

    if (arr[idx] === data)
        return idx;
    else {
        let subIdx = findIndexOfOccurance2(arr, idx + 1, data);
        return subIdx;
    }
}

console.log(findIndexOfOccurance2(arr, 0, 96));      // 7
console.log(findIndexOfOccurance2(arr, 0, 33));      // 15
console.log(findIndexOfOccurance2(arr, 0, 51));      // 1
console.log(findIndexOfOccurance2(arr, 0, 420));     // -1
