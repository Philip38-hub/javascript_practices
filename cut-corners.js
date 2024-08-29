const round = (n) => {
    return n < 0 ? ceil(n-0.5) : floor(n+0.5); 
}

const ceil = (n) => {
    if (Number.isInteger(n)) return n;
    return n > 0 ? Number.toFixed(n) + 1 : Number.toFixed(n);
}

const floor = (n) => {
    if (Number.isInteger(n)) return n;
    return n > 0 ? Number.toFixed(n) : Number.toFixed(n) - 1;
}

const trunc = (n) => n < 0 ? ceil(n) : floor(n);

// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round)); // [ 4, -4, 3, -3 ]
// console.log(nums.map(floor)); // [ 3, -4, 3, -4 ]
// console.log(nums.map(trunc)); // [ 3, -3, 3, -3 ]
// console.log(nums.map(ceil));  // [ 4, -3, 4, -3 ]
