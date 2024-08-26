// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
//   }
  
var get = (key) => sourceObject[key];
var set = (key, value) => {(sourceObject[key] = value); return sourceObject[key];}
// console.log(get('num'));
// console.log(set('num', 43));