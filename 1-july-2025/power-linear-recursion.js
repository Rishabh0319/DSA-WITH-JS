
let num = 2;
let pow = 4;

function power(n, p) {
    if (p === 0)
        return 1;
    return n * power(n, p - 1);
}

console.log(power(num, pow));


