const cityInput = document.getElementById("input");
const searchBtn = document.getElementById("search");

const weatherCard = document.getElementById("weatherCard");

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const feels = document.getElementById("feels");
const icon = document.getElementById("icon");
const error = document.getElementById("error");

const API_KEY = "6c4c675281a52e71ce944380fd557981";

searchBtn.addEventListener("click", () => {

    const cityName = cityInput.value.trim();

    if(cityName === ""){
        alert("Please Enter City Name");
        return;
    }

    error.innerText = "";
    weatherCard.classList.add("hidden");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)

    .then((response)=>{

        if(!response.ok){
            throw new Error("City Not Found");
        }

        return response.json();

    })

    .then((data)=>{

        city.innerText = data.name + ", " + data.sys.country;

        temp.innerText = data.main.temp + " °C";

        condition.innerText = data.weather[0].description;

        humidity.innerText = data.main.humidity;

        wind.innerText = data.wind.speed;

        pressure.innerText = data.main.pressure;

        feels.innerText = data.main.feels_like;

        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherCard.classList.remove("hidden");

    })

    .catch((err)=>{

        error.innerText = err.message;

    });

});