import "./style.css";

const $ = document;
const showCityElem = $.getElementById("city-name");
const showTempElem = $.getElementById("temp");
const windSpeedElem = $.getElementById("wind-speed");
const humidityElem = $.getElementById("humidity");
const returnBtn = $.getElementById("return-btn");
const showStatusElem = $.getElementById("show-status");
const errorModal = $.getElementById("modal");
const modalCloseBtn = $.getElementById("modal-close-btn");
const themeSwitchBtn = $.getElementById("toggle");

const searchInput = $.getElementById("search-input");
const searchBTN = $.getElementById("search-btn");
const searchSection = $.getElementById("search-section");
const showWeather = $.getElementById("show-weather");

const systemThemeChecker = window.matchMedia("(prefers-color-scheme: dark)");
const themeExsits = localStorage.getItem("theme");

// check to see if theme exsits:
if (!themeExsits) {
  if (systemThemeChecker.matches) {
    localStorage.setItem("theme", "dark");
    themeSwitchBtn.checked = true;
    switchThemeHandler();
  } else {
    localStorage.setItem("theme", "light");
    themeSwitchBtn.checked = false;
    switchThemeHandler();
  }
} else {
  switchThemeHandler();
}

// Dark and Light Mode handler
function switchThemeHandler() {
  if (themeSwitchBtn.checked === false) {
    themeSwitchBtn.checked = false;
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  } else {
    themeSwitchBtn.checked = true;
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
themeSwitchBtn.addEventListener("click", () => {
  switchThemeHandler();
});

const api_key = "";
let city_name = "Washington DC";

searchInput.addEventListener("input", (e) => {
  city_name = e.target.value;
});

returnBtn.addEventListener("click", () => {
  searchSection.classList.toggle("d-none");
  showWeather.classList.toggle("d-none");
  searchInput.value = city_name;
});

searchBTN.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather(city_name, api_key);
  searchSection.classList.toggle("d-none");
  showWeather.classList.toggle("d-none");
  searchInput.value = "";
});

modalCloseBtn.addEventListener("click", () => {
  errorModal.classList.toggle("flex");
  errorModal.close();
  searchSection.classList.toggle("d-none");
  showWeather.classList.toggle("d-none");
});

function fetchWeather(city_name, api_key) {
  const weatherapiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;

  fetch(weatherapiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json(); // Parse res as Json
    })
    .then((data) => {
      showCityElem.textContent = data.name;
      showTempElem.textContent = data.main.temp + " °C";
      windSpeedElem.textContent = data.wind.speed + " KM/H";
      humidityElem.textContent = data.main.humidity + " %";
      showStatusElem.textContent = data.weather[0].main;
    })
    .catch((error) => {
      errorModal.classList.toggle("flex");
      errorModal.showModal();
      console.error(error);
    });
}
