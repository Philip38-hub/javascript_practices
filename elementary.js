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
    if (b === 0) return 'error'
    let count = 0
    for (let i = a-b; i >= 0; i-=b) {
        count++
    }
    return count    
}

const modulo = (a, b) => {
    let modulos = 0
    if (b === 0) {
        return
    }

    for (let i = a; i >= 0; i-=b) {
        if (b > i) {
            modulos = i
        }
    }
    return modulos
}

console.log(multiply(3, -2))
console.log(divide(3, 2))
console.log(modulo(10, 2))