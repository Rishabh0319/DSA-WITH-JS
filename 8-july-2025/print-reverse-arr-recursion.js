




let arr = [12, 23, 435, 46, 57, 67, 8, 87, 98, 6, 45, 34, 24, 23, 2];

function printReverse(arr, idx) {

    if (idx === arr.length)
        return;

    printReverse(arr, idx + 1);
    console.log(arr[idx]);

}

printReverse(arr, 0);