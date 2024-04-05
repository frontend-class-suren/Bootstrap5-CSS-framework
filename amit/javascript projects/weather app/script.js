const apiKey = '7a8133d75e8070b9e8dc45055a7e9608';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const weatherDisplay = document.getElementById('weatherDisplay');

searchButton.addEventListener('click', () => {
    const location = searchInput.value.trim();
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location');
    }
});

async function getWeather(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
        } else {
            alert(data.message || 'Failed to fetch weather data');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data');
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    weatherDisplay.innerHTML = `<p> <i class="fas fa-location"></i> Location: ${name}</p>
                                <p>Temperature: ${temperature}°C &#x2601</p>`;
}