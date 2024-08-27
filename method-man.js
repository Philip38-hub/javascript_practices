var words = (str) => str.split(' ');
var sentence = (arr) => arr.join(' ');
var yell = (str) => str.toUpperCase();
var whisper = (str) => '*'+str.toLowerCase()+'*';
var capitalize = (str) => {
    if (str[0] !== str[0].toUpperCase()) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    } else {
        return str[0] + str.slice(1).toLowerCase();
    }
};

console.log(capitalize('STR'));