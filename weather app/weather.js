const apiKey = '0912176ce8e3aa5185a94ea9baa3371b'; 

const temperatureElement = document.getElementById("temperature");
const cityInput = document.getElementById("city-input");
const weatherForm = document.getElementById("temperature-form");

weatherForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const city = cityInput.value; // Get the city name entered by the user

  // Construct the API URL with the user's city input
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if(data.cod == 200){
        const temperature = data.main.temp;
        const temperatureCelsius = (temperature - 273.15).toFixed(2);
        temperatureElement.textContent = `${temperatureCelsius}°C`;
      } else{
        temperatureElement.textContent = "could not find the city";
      }
      })
    });
    

