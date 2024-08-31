const letterSpaceNumber = (str) => {
    return str.match(/[a-zA-Z]\s\d(?!\w)/g) || [];
}

console.log(letterSpaceNumber('I like 7up.'))
