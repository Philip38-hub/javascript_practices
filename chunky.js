const chunk = (str, size) => {
    let result = [];
    for (let i = 0; i < str.length; i += size) {
        if (i + size >= str.length) {
        result.push(str.slice(i));
        } else {
        result.push(str.slice(i, i + size));
        }
    }

    return result
}

console.log(chunk('pouet', 2))