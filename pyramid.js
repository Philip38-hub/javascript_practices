const pyramid = (str, num) => {
    var result = '';
    for (let i = 1; i <= num; i++) {
        for (let j = num-i; j > 0; j--) {
            result += ' '.repeat(str.length)
        }
       let k = 2*i-1
        for (let j = 0; j < k; j++) {
            result += str
        }
        if (i !== num) {
            result += '\n'
        }
    }
    return result
}

// console.log(pyramid('a', 5))