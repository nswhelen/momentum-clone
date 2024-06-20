const API_KEY = "ce4101fd8fd9550ed3d1877c8c95e9f6"

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoerror() {
    alert("Can't find you. Can't show you the weather.");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoerror);