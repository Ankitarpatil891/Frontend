const apiKey = 'b98e6a8b3194cce6be5670613d265335';  // Replace with your OpenWeatherMap API key

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city === '') {
        document.getElementById('error').textContent = 'Please enter a city name.';
        return;
    }

    fetchWeather(city);
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data =>{
            if(!data||!data.main){

            console.error("No weather data found");
            document.getElementById("error").textContent = "weather data not found";
        }
        else{ 
        // console.log(data.main.temp);
            displayWeather(data);
        }
    })
        .catch(error => {
            document.getElementById('error').textContent = error.message;
        });
}

function displayWeather(data) {
    document.getElementById('error').textContent = '';

    const cityName = data.name;
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;

    document.getElementById('cityName').textContent = `Weather in ${cityName}`;
    document.getElementById('temp').textContent = `Temperature: ${temp}°C`;
    document.getElementById('desc').textContent = `Description: ${desc}`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
}
