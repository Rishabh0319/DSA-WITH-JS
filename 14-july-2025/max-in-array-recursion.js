


let arr = [23, 34, 65, 3, 54, 2, 7, 8, 6, 43, 7];

function maxArrRecur(arr, idx) {

    if (arr.length - 1 === idx)
        return arr[idx];

    let sumMax = maxArrRecur(arr, idx + 1);

    if (sumMax > arr[idx])
        return sumMax;
    else
        return arr[idx];
}

console.log("MAX is: ", maxArrRecur(arr, 0));
