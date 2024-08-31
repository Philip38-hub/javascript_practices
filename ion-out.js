var ionOut = (str) => {
    const words = str.includes(',') ? str.split(', ') : str.split(' ');
    const result = [];
    words.forEach(word => {
        const match = /(?<=t)ion/.test(word);
        if (match) {
            result.push(word.slice(0, word.length - 3));
        } 
    })
    return result
}

// console.log(ionOut('transfusion'))