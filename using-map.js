const citiesOnly = (arr) => {
    return arr.map(({ city }) => city);
  }
  const upperCasingStates = (arr) => {
    return arr.map((state) =>
      state.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    );
  };
  const fahrenheitToCelsius = (arr) => {
    return arr.map(temp => {
      const fahrenheit = parseFloat(temp);
      const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
      return `${celsius}°C`;
    });
  };
  
  const tempForecasts = (arr) => {
    return arr.map(({ city, temperature, state }) => {
      let temp = fahrenheitToCelsius([temperature])
      let finalCity = upperCasingStates([city])
      let finalState = upperCasingStates([state])
  
      return `${temp}elsius in ${finalCity}, ${finalState}`
    });
  }
  
  const trimTemp = (arr) => {
    return arr.map(obj => ({
      ...obj,
      temperature: obj.temperature.trim().replace(/\s*°\s*F/, '°F')
    }));
  };
