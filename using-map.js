const citiesOnly = (arr) => arr.map((value) => {
    return value.city
})

const upperCasingStates = (arr) => arr.map((value) => {
    let result = ""
    for (let i = 0; i < value.length; i++) {
        if (i === 0 || (i>0 && value[i-1] === ' ')) {
            result += value[i].toUpperCase()
        } else {
            result += value[i].toLowerCase()
        } 
    }
    return result
})

const fahrenheitToCelsius = (arr) => arr.map((value) => {
    let cel = eval(Math.floor((value.slice(0, -2) - 32) * 5 / 9))
    if (typeof cel === 'number') {
        return cel + "°C"
    }
})

const trimTemp = (arr) => arr.map((value) => {
    return {
        ...value,
        temperature: value.temperature.replace(/\s+/gm,"")
    };
});

const tempForecasts = (arr) => arr.map((value) => {
    let temp = eval(Math.round((extractNumber(value.temperature.replace(/^\s+|\s+$/gm,''))-32) * 5/9)) + "°Celsius";
    return temp + " in " + upperCasing(value.city) + ", " + upperCasing(value.state)
});

const upperCasing = (value) => {
    let result = ""
    for (let i = 0; i < value.length; i++) {
        if (i === 0 || (i>0 && value[i-1] === ' ')) {
            result += value[i].toUpperCase()
        } else {
            result += value[i].toLowerCase()
        } 
    }
    return result
}


const extractNumber = (str) => {
    if (typeof str !== 'string') {
        return null;
    }
    const match = str.match(/\d+/);
    return match ? match[0] : null;
};

// console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' -0.3 °F',
//       state: 'new york',
//       region: 'West',
//     },
// ]))