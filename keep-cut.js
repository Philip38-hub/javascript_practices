var cutFirst = (str) => str.slice(2);
var cutLast = (str) => str.slice(0, -2);
var cutFirstLast = (str) => cutFirst(cutLast(str));
var keepFirst = (str) => str.slice(0, 2);
var keepLast = (str) => str.slice(-2);
var keepFirstLast = (str) => str.length <= 4 ? str : keepFirst(str) + keepLast(str);

// console.log(cutFirst("Hello")); // Output: "llo"
// console.log(cutLast("Hello")); // Output: "Hel"
// console.log(cutFirstLast("Hello")); // Output: "l"
// console.log(keepFirst("Hello")); // Output: "He"
// console.log(keepLast("Hello")); // Output: "lo"
// console.log(keepFirstLast("Hello")); // Output: "Helo"