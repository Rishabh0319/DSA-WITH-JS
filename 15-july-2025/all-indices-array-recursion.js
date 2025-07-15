


let arr = [23, 34, 65, 4, 34, 76, 87, 55, 34, 7, 8, 23];  // data = 34  OUTPUT:  [1, 4, 8]


function allIndices(arr, idx, data, numOfData) {

    if (arr.length === idx)
        return new Array(numOfData);

    if (data === arr[idx]) {
        let subIdx = allIndices(arr, idx + 1, data, numOfData + 1);
        subIdx[numOfData] = idx;
        return subIdx;
    } else {
        let subIdx = allIndices(arr, idx + 1, data, numOfData);
        return subIdx;
    }

}


console.log(allIndices(arr, 0, 34, 0));
