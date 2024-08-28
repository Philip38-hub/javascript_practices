var cutFirst = (str) => str.slice(2);
var cutLast = (str) => str.slice(0, -2);
var cutFirstLast = (str) => cutFirst(cutLast(str));
var keepFirst = (str) => str.slice(0, 2);
var keepLast = (str) => str.slice(-2);
var keepFirstLast = (str) => keepFirst(str) + keepLast(str);

console.log(cutFirstLast('james'))
console.log(keepFirstLast('james'))