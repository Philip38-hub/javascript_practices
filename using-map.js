const citiesOnly = (arr) => arr.map((value) => {
    return value.city
})

const upperCasingStates = (arr) => arr.map((value) => {
    return value[0].toUpperCase()+value.slice(1)
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
        temperature: value.temperature.trim()
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

console.log(fahrenheitToCelsius(['32°F', '59°F', '25°F']))