

// Q=> find last index of occurances in array using recursion


let arr = [23, 34, 65, 34, 65, 76, 86, 43, 34, 76, 14, 15, 14];

// data = 34    output = 8
// data = 14    output = 12
// data = 7     output = -1 




function findLastIdxRecur(arr, idx, data) {

    if (idx === arr.length)
        return -1;

    let subLastIdx = findLastIdxRecur(arr, idx + 1, data);

    if (subLastIdx === -1) {
        if (data === arr[idx])
            return idx;
        else
            return -1;
    } else
        return subLastIdx;
}

console.log(findLastIdxRecur(arr, 0, 34));
console.log(findLastIdxRecur(arr, 0, 14));
console.log(findLastIdxRecur(arr, 0, 7));
