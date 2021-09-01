
const showSpinner = (showDisplay) => {
    const getSpinner = document.getElementById('spinner');
    getSpinner.style.display = showDisplay;
};
const showWeather = (showDisplay) => {
    const getWeather = document.getElementById('weather-data');
    getWeather.style.display = showDisplay;
};

const getLocation = () => {

    const inputLocation = document.getElementById('input-country')
    inputLocationValue = inputLocation.value;
    inputLocation.value = '';
    // console.log(inputCountry);
    temperatureData(inputLocationValue);
    showSpinner('block');
    showWeather('none');
};

const temperatureData = (location) => {
    // console.log(location);
    const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=46ad7457603b9b0104e633e78cd60e16&units=metric`;
    fetch(locationUrl)
        .then(res => res.json())
        .then(data => getWeatherData(data));

    //  catch ta o kaj  korbe 

    // .catch(error => {
    //     console.log(error.message);
    //     document.getElementById('error-message').classList.remove('d-none');
    //     showSpinner('none');
    // })
};

const getWeatherData = (data) => {
    // console.log(data);
    if (data.cod == '404') {

        document.getElementById('error-message').classList.remove('d-none');
        showSpinner('none');
    }

    else {
        const weatherData = document.getElementById('weather-data');
        weatherData.textContent = '';
        const div = document.createElement('div');
        div.innerHTML = `
                     <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
                    <h1>${data.name}</h1>
                    <h3><span>${data.main.temp}</span>&deg;C</h3>
                    <h1 class="lead">${data.weather[0].main}</h1>   
            `;
        weatherData.appendChild(div);
        showSpinner('none');
        showWeather('block');
    }


};

