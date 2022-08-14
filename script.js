let currentTime = new Date();
let dateElement = document.querySelector("#date");

let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = currentTime.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayIndex = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dayNumber = currentTime.getDate();

let monthIndex = currentTime.getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let year = currentTime.getFullYear();

dateElement.innerHTML = `${days[dayIndex]} ${hours}:${minutes}<br /> ${dayNumber} ${months[monthIndex]} ${year}`;

//homework

function showTemperature(response) {
  let cityTemperature = document.querySelector("#temperature");
  console.log(cityTemperature);
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  cityTemperature.innerHTML = `${temperature}`;
}

function cityDisplay(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let showCity = document.querySelector("#place");
  showCity.innerHTML = `${cityInput.value}`;
  let apiKey = "80bad2447a850953538c36260390bdb3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", cityDisplay);

function localTemperature(response) {
  let localTemp = document.querySelector("#number");
  console.log(localTemp);
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  localTemp.innerHTML = `${temperature}`;
  let cityName = document.querySelector("#currentCity");
  cityName.innerHTML = `${response.data.name}`;
}
