



let arr = [12, 23, 34, 4, 54, 657, 687, 989, 76, 67, 56, 64];



function PrintArr(arr, idx) {

    if (idx === arr.length)
        return;

    console.log(arr[idx]);
    PrintArr(arr, idx + 1);
}


PrintArr(arr, 0);