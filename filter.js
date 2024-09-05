const filter = (arr, somefunction) => {
    let result = [];
    for (let char of arr) {
        if (somefunction(char)) {
            result.push(char);
        }
    }
    return result
}

const reject = (arr, somefunction) => {
    let result = [];
    for (let char of arr) {
        if (!somefunction(char)) {
            result.push(char);
        }
    }
    return result
}

const partition = (arr, somefuntion) => {
    return [filter(arr, somefuntion), reject(arr, somefuntion)]
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers, num => num % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4]

const rejectedNumbers = reject(numbers, num => num % 2 === 0);
console.log(rejectedNumbers); // Outputs: [1, 3, 5]

const [even, odd] = partition(numbers, num => num % 2 === 0);
console.log(even); // Outputs: [2, 4]
console.log(odd);  // Outputs: [1, 3, 5]