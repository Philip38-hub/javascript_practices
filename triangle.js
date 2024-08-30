const triangle = (str, num) => {
    var result = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            result += str
        }
        if (i !== num - 1) {
            result += '\n'
        }
    }
    return result
}

// console.log(triangle('pouet', 3))