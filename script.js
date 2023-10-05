async function getWeather() {
    const cityName = document.getElementById('search').value;
    const apiKey = '4118e0dfed5ba766f626ca0819ce0139'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

     if (response.ok) {
        const temperature = `${Math.round(data.main.temp)}°C`;
        const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const windSpeed = `${data.wind.speed} KM/hr`;
        const humidity = `${data.main.humidity}%`;
        const cityName = data.name;

            
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('weather-icon').src = weatherIcon;
            document.getElementById('wind-speed').textContent = windSpeed;
            document.getElementById('humidity').textContent = humidity;
            document.getElementById('city-name').textContent = cityName;
        } else {
            alert('City not found!');
        }
    } catch (error) {
        console.error('Error in data:', error);
    }
}
