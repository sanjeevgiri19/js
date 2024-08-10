console.log("heello");


// API key for OpenWeatherMap (replace with your own API key)
const API_KEY = '30af23b519c896936cbbb0c080054abb';

// Function to fetch weather data
const fetchWeather = async (city) => {
  // Construct the API URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    // Fetch data from the API
    const response = await fetch(url);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error('City not found');
    }

    // Parse the JSON response
    const data = await response.json();
    return data;

  } catch (error) {
    // Log and rethrow error for handling in the caller
    console.error(error);
    throw error;
  }
};

// Function to update the UI with weather data
const updateWeatherUI = (data) => {
  // Update UI elements with weather data
  document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
};

// Function to handle search button click
const handleSearch = async () => {
  // Get the city name from input field
  const city = document.getElementById('city').value;

  try {
    // Fetch weather data for the entered city
    const data = await fetchWeather(city);
    // Update the UI with the fetched data
    updateWeatherUI(data);
  } catch (error) {
    // Handle errors (e.g., display error message to the user)
    document.getElementById('description').textContent = 'Error fetching weather data';
    document.getElementById('temperature').textContent = '';
    document.getElementById('humidity').textContent = '';
    document.getElementById('wind').textContent = '';
  }
};

// Add event listener to the search button
document.getElementById('search').addEventListener('click', handleSearch);
