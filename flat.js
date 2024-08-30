var flat = (arr, depth) => {
    if (arr.length === 0) {
        return [];
    }
    if (arr.length === 1) {
        return arr;
    }
    if (depth === undefined) {
        depth = 1;
    }
    let newArr = [];
    if (depth === Infinity) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                let subArr = flat(arr[i], depth = Infinity);
                for (let j = 0; j < subArr.length; j++) {
                    newArr.push(subArr[j]);
                }
                
            } else {
                newArr.push(arr[i]);
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                if (depth > 0) {
                    let subArr = flat(arr[i], depth-1);
                    for (let j = 0; j < subArr.length; j++) {
                        newArr.push(subArr[j]);
                    }
                } else {
                    newArr.push(arr[i]);
                }
                
            } else {
                newArr.push(arr[i]);
            }
        }
    }  
    return newArr
}

console.log(flat([1, [2, [3], [4, [5]]]], Infinity))