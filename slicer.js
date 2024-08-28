const slice = (arr, start = 0, end = arr.length) => {
    if (start < 0) {
        start = arr.length + start;
    }
    if (end < 0) {
        end = arr.length + end;
    }
    if (typeof arr === 'string') {
        let newstr = ""
        for (let i = start; i < end; i++) {
            newstr+=(arr[i]);
        }
        return newstr;
    } else {
        const newArr = [];
        for (let i = start; i < end; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
}

console.log(slice([1, 2, 3, 4, 5]))
console.log(slice("hello world"))