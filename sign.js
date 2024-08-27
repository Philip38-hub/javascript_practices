var sign = (num) => num > 0 ? 1 : num < 0 ? -1 : 0;
var sameSign = (num1, num2) => sign(num1) === sign(num2) ? true : false;