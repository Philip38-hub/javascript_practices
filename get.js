const get = (src, path) => {
    const values = path.split('.');
    if (src[values[0]] === undefined) return undefined
    if (values.length === 1) return src[values[0]]
    if (values.length === 2) return src[values[0]][values[1]]
    if (values.length === 3) return src[values[0]][values[1]][values[2]]
}

// const src = { a: [{ b: t }] } 
// const path = 'a.0.b.toString'
// console.log(get(src, path)) // -> 'peekaboo'
