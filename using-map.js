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
    let temp = eval(Math.floor((extractNumber(value.temperature.replace(/^\s+|\s+$/gm,''))-32) * 5/9)) + "°Celsius"
    let cty = value.city[0].toUpperCase() + value.city.slice(1)
    let country = value.state[0].toUpperCase() + value.state.slice(1)
    return temp + " in " + cty + ", " + country
});

const extractNumber = (str) => {
    if (typeof str !== 'string') {
        return null;
    }
    const match = str.match(/\d+/);
    return match ? match[0] : null;
};

console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ]))