const multiply = (a, b) => {
    let result = 0
    var sign = b < 0 ? -1 : 1
    var multiplier = abs(b)
    for (let i = 0; i < multiplier; i++) {
        result += a
    }
   return sign === -1 ? -result : result
};
const divide = (a, b) => {
    if (b === 0) return
    let result = 0;
    const sign = (a < 0) === (b < 0) ? 1 : -1;
    let dividend = abs(a);
    const divisor = abs(b);

    while (dividend >= divisor) {
        dividend -= divisor;
        result++;
    }

    return sign === -1 ? -result : result;  
}
var abs = (num) => num < 0 ? -num : num;
const round = (n) => {
    return n < 0 ? ceil(n-0.5) : floor(n+0.5); 
}

const ceil = (n) => {
    if (n === 0) return 0
   let num = multiply(n, 10);
   return n < 0 ? divide(num, 10) : divide(num, 10) + 1;
}

const floor = (n) => {
    if (n === 0) return 0
    let num = multiply(n, 10);
    return n > 0 ? divide(num, 10) : divide(num, 10) -1;
}

const trunc = (n) => n < 0 ? ceil(n) : floor(n);

