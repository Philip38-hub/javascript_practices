const indexOf = (arr, value, start = 0) => {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

const lastIndexOf = (arr, value, start = arr.length - 1) => {
    for (let i = start; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

const includes = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

const array = [1, 2, 3, 4, 2, 5];

console.log(indexOf(array, 2)); // Output: 1
console.log(indexOf(array, 2, 2)); // Output: 4
console.log(indexOf(array, 6)); // Output: -1

console.log(lastIndexOf(array, 2)); // Output: 4
console.log(lastIndexOf(array, 2, 3)); // Output: 1
console.log(lastIndexOf(array, 6)); // Output: -1

console.log(includes(array, 2)); // Output: true
console.log(includes(array, 6)); // Output: false