const multiply = (a, b) => {
    let result = 0
    for (let i = 0; i < b; i++) {
        result += a
    }
    return result
};

const divide = (a, b) => {
    let count = 0
    for (let i = a-b; i >= 0; i-=b) {
        count++
    }
    return count    
}

const modulo = (a, b) => {
    let modulos = 0
    for (let i = a; i >= 0; i-=b) {
        if (b > i) {
            modulos = i
        }
    }
    return modulos
}

// console.log(multiply(3, 2))
// console.log(divide(3, 2))
// console.log(modulo(10, 2))