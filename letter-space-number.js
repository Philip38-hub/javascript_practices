const letterSpaceNumber = (str) => {
    return str.match(/[a-zA-Z]\s\d(?!\d)/g) || [];
}

console.log(letterSpaceNumber('example 1, example 20'))
