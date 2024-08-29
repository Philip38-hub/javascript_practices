// const split = (str, sep) => {
//     let result = [];
//     let current = '';

//     for (let i = 0; i < str.length; i++) {
//         if (sep.length > 1) {
//             // Correctly compare the substring of str with sep
//             if (str.substr(i, sep.length) === sep) {
//                 if (current !== '') {
//                     result.push(current);
//                     current = '';
//                 }
//                 i += sep.length - 1; // Move the index forward by the length of the separator
//             } else {
//                 current += str[i];
//             }
//         } else {
//             if (str[i] === sep) {
//                 if (current !== '') {
//                     result.push(current);
//                     current = '';
//                 }
//             } else {
//                 current += str[i];
//             }
//         }
//     }

//     if (current !== '') {
//         result.push(current);
//     }

//     return result;
// }

const split = (str, sep) => {
    let result = [];
    let current = '';

    for (let i = 0; i < str.length; i++) {
        if (sep.length > 1) {
            // Correctly compare the substring of str with sep
            if (str.substr(i, sep.length) === sep) {
                result.push(current);
                current = '';
                i += sep.length - 1; // Move the index forward by the length of the separator
            } else {
                current += str[i];
            }
        } else {
            if (str[i] === sep) {
                result.push(current);
                current = '';
            } else {
                current += str[i];
            }
        }
    }
    // After the loop, push the final part
    result.push(current);

    return result;
}
const join = (arr, sep) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            result += sep
        }
        result += arr[i]
    }
    return result
}

// console.log(split('ee,ff,g,', ','))
// console.log(split('rrrr', 'rr'))
// console.log(split('ggg - ddd - b', ' - '))