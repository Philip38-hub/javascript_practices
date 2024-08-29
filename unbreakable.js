const split = (str, sep) => {
    let result = [];
    let current = '';
    for (const char of str) {
        if (char === sep) {
            if (current !== '') {
                result.push(current);
                current = '';
            }
        } else {
            current += char
        }
    }
    if (current !== '') {
        result.push(current);
    }
    return result
}

const join = (arr, sep) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            result += sep
        }
        result += arr[i]
    }
    return result
}