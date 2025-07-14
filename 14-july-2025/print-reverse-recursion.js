

let arr = [12, 233, 43, 546, 57, 6, 78, 7, 6, 57, 587, 765, 56];

function printArr(arr, idx) {

    if (idx === arr.length)
        return;

    printArr(arr, idx + 1);
    console.log(arr[idx]);

}

printArr(arr, 0)
