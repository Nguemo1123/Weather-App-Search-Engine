function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
}

let apiKey = "4779942cd0fbaf73cfba882126b42e77";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
