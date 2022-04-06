// date and time
let now = new Date();

let dateAndTime = document.querySelector(".dateAndTime");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  `0${minutes}`;
}
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
dateAndTime.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

//geolocation and weather and search engine
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let message = `It is ${temperature}° in ${response.data.main.temp}`;
  let newTemperature = document.querySelector("#temperature");
  newTemperature.innerHTML = message;
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${cityInput.value}`;
  let city = cityInput.value;
  let apiKey = "4779942cd0fbaf73cfba882126b42e77";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", searchCity);
