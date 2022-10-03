const API_KEY = "e862b7b1a840ae3919413a67d1fa2be9";

function ongeook(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you are live in" , lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
    console.log(url);
}

function ongeoerror(){
    alert("sorry");
}
navigator.geolocation.getCurrentPosition(ongeook, ongeoerror);