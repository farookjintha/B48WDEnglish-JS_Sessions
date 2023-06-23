var countries = document.getElementById('countries');
var weather = document.getElementById('weather');

// var REST_COUNTRIES_API = 'https://restcountries.com/v3.1/all';
// var WEATHER_API = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'

var BASE_REST_COUNTRIES_API = 'https://restcountries.com/v3.1';
var BASE_WEATHER_API = 'https://api.openweathermap.org/data/3.0';


var WEATHER_API_KEY = '1663b1632c530e410d3f0a420b65a8d2';


async function getRestCountries(){
    try{
        const response = await fetch(`${BASE_REST_COUNTRIES_API}/all`);
        const countriesList = await response.json();
        countriesList.forEach((country, index) => {
            countries.innerHTML += `
            <div class='country' key='${index}'>
                <div class='country-name'>${country.name.common}</div>
                <img src='${country.flags.png}' alt='Flag' />
                <p>${country.capital && country.capital[0]}</p>
                <p>${country.region}</p>
                <p>${country.cca3}</p>
                <button onclick='getWeather(${country.latlng[0]},${country.latlng[1]}, ${index})'>Click for weather</button>
                <div id='weather-${index}'>

                </div>
            </div>
            `
            console.log('Coutries: ', countriesList);
        })
    }catch(error){
        console.log('Error: ', error);
    }
}

getRestCountries();



async function getWeather(lat, lng, index){
    var weatherOfCountry = document.getElementById(`weather-${index}`);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f3414503a84e614ae22de22b4b156520`)
    const weatherOutput = await response.json();
    weatherOfCountry.innerHTML += `
        <p>Temperature: ${weatherOutput.main.temp} Celsius</p>
        <p>Feels like: ${weatherOutput.main.feels_like} Celsius</p>
        <p>Humidity: ${weatherOutput.main.humidity} </p>
    `

}