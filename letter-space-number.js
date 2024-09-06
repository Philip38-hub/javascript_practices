const letterSpaceNumber = (str) => {
    return str.match(/[a-zA-Z]\s\d(?=\W)/g) || [];
}

console.log(letterSpaceNumber('I like 7, I like 8, I like 9.'))
