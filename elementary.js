const multiply = (a, b) => {
    let result = 0
    var sign = b < 0 ? -1 : 1
    var multiplier = abs(b)
    for (let i = 0; i < multiplier; i++) {
        result += a
    }
   return sign === -1 ? -result : result
};

var abs = (num) => num < 0 ? -num : num;

const divide = (a, b) => {
    if (b === 0) throw new Error("Division by zero is not allowed");
    let result = 0;
    const sign = (a < 0) === (b < 0) ? 1 : -1;
    let dividend = Math.abs(a);
    const divisor = Math.abs(b);

    while (dividend >= divisor) {
        dividend -= divisor;
        result++;
    }

    return sign * result;  
}

const modulo = (a, b) => {
    if (b === 0) throw new Error("Division by zero is not allowed");
    const divisor = Math.abs(b);
    let remainder = Math.abs(a);

    while (remainder >= divisor) {
        remainder -= divisor;
    }

    return a < 0 ? -remainder : remainder;
}

console.log(multiply(3, -2))
console.log(divide(3, 2))
console.log(modulo(10, 2))