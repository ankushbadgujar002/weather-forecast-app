let apiKey = "f57729aedf0a02094f975d9137991f7c";
let weatherIcon = document.querySelector("#weather-icon");
let spans = document.querySelectorAll("span")

let searchBtn = document.querySelector("label");
searchBtn.addEventListener("click", async(e) => {
    let inputVal = document.querySelector("#search").value.trim();

    if (!inputVal) {
        alert("Please enter a city name.");
        return;
    }

    try {
        let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric&lang=en`);
        let response = await api.json();
        console.log(response);

        document.querySelector(".temp").innerHTML = Math.floor(response.main.temp) + "°C";
        document.querySelector(".city").innerHTML = response.name;
        document.querySelector(".para1").innerHTML = Math.floor(response.main.humidity) + "%"
        document.querySelector(".para2").innerHTML = Math.floor((response.wind.speed) * 3.6) + " km/h";
        document.querySelector("#weather-icon2").src = "./images/humidity.png";
        document.querySelector("#weather-icon3").src = "./images/wind.png";

        spans.forEach((span) => {
            span.classList.remove("hide");
        })

        if (response.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/cloudy.png";
        } else if (response.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png";
        } else if (response.weather[0].main == "Rain") {
            weatherIcon.src = "./images/Rain.png";
        } else if (response.weather[0].main == "Snow") {
            weatherIcon.src = "./images/snow.png";
        } else if (response.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png";
        } else if (response.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png";
        }
    } catch (error) {
        alert(`${inputVal} is not found...!`);
        document.querySelector("#search").value = "";

    }
});