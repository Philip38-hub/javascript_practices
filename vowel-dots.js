const vowelDots = (str) => {
    if (str.length === 0) {
        return '';
    }
    let vowels = /[aeiou]/i
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result += str[i]
        if (vowels.test(str[i])) {
            result += '.'
        }
    }
    return result
}

console.log(vowelDots('applE'))