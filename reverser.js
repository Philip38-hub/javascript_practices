const reverse = (arr) => {
    var newArr = [];
   for (let i = arr.length - 1; i >=0; i--) {
        newArr.push(arr[i]);
   }
   if (typeof arr === 'string') {
    return newArr.join('')
   }
   return newArr
}

const originalArray = [1, 2, 3, 4];
const reversedArray = reverse(originalArray);

console.log(reversedArray); // Output: [4, 3, 2, 1]
console.log(reverse('pouet'))
