
let arr = [23, 34, 6, 75, 43, 745, 234, 65, 763, 74, 26, 754, 278, 5];

function maxInArrRecur(arr, idx = 0) {

    if (idx === arr.length - 1)
        return arr[idx];

    let maxInSubArr = maxInArrRecur(arr, idx + 1);

    if (maxInSubArr > arr[idx])
        return maxInSubArr;
    else
        return arr[idx];

}

console.log(maxInArrRecur(arr, 0));
