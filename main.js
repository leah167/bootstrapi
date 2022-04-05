//Part 1
let doggoButton = document.querySelector('#doggoButton');
let doggoImg = document.querySelector('#doggo');

//Part 2

let cityInput = document.querySelector("#cityInput");
let getWeatherButton = document.querySelector("#getWeatherButton");
let temperature = document.querySelector("#temperature");
let wind = document.querySelector("#wind");
let description = document.querySelector("#description");

//Event listener for Part 1

doggoButton.addEventListener('click', function() {
    console.log("Fetch!")
    fetch('https://dog.ceo/api/breeds/image/random')
   
     .then(function (httpResponse){
        return httpResponse.json();
     })
    
     .then(function (data){
        console.log(data); //our JSON object
        console.log(data.message); //our random dog URL!
        doggoImg.src = data.message;
     })
})

//Event Listener for Part 2

getWeatherButton.addEventListener("click", function () {
    let cityName = cityInput.value;
    console.log(cityName);

    let city = (`https://goweather.herokuapp.com/weather/${cityName}`);
    console.log(city);

    fetch(city)
        .then(function(httpResponse) {
            return httpResponse.json();
        })
        .then(function(data) {
            temperature.innerHTML = `The current temperature is: ${data.temperature}`;
            wind.innerHTML = `The current windspeed is: ${data.wind}`;
            description.innerHTML = `The current weather in ${cityName} is: ${data.description}`;
        })
})