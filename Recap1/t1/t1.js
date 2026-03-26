let celsius = Number(prompt('Anna lämpötila Celsius-asteina:'));

let fahrenheit = (celsius * 9) / 5 + 32;

let kelvin = celsius + 273.15;

const vastausElementti = document.querySelector('#vastaus');

vastausElementti.innerHTML = `
    <p>Syötetty lämpötila: <strong>${celsius} °C</strong></p>
    <p>Fahrenheit-asteina: <strong>${fahrenheit.toFixed(2)} °F</strong></p>
    <p>Kelvin-asteina: <strong>${kelvin.toFixed(2)} K</strong></p>
`;
