const get = (src, path) => {
    // Split the path by the dot to get the keys
    const keys = path.split('.');

    // Traverse the src object using the keys
    let result = src;
    for (let key of keys) {
        if (result === undefined || result === null) {
            return undefined; // If any part of the path is undefined or null, return undefined
        }
        result = result[key];   
    }

    return result;
};

const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
console.log(get(src, path)) // -> 'peekaboo'

