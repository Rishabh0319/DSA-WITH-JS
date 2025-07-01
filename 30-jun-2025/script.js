
let x = 5;

function printDecreasing(num) {
    if (num === 0)
        return;

    console.log(num);
    printDecreasing(num - 1)
}

// printDecreasing(x);




function printIncreasing(num) {
    if (num === 0) {
        return;
    }
    printIncreasing(num - 1);
    console.log(num);
}

// printIncreasing(x);






function printDecreasingIncreasing(num) {
    if (num === 0)
        return;

    console.log(num);
    printDecreasingIncreasing(num - 1);
    console.log(num);
}

printDecreasingIncreasing(3);