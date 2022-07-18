var form = document.querySelector(".weather-search");
var input = document.querySelector(".search");


var searchedCity = document.querySelector(".weather-search-term");
var cityContainer= document.querySelector(".weather-container");




    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var inputValue = event.target.value

        
        fetch(apiUrl).then(function (response) {

            response.json().then(function (data) {
                console.log(data);
            })

                .catch(function (error) {
                    msg.textContent = "Please enter a valid city";
                });
        })
    })

var apiKey = "d91f911bcf2c0f925fb6535547a5ddc9"
var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + "Miami" + "&appid=" + apiKey;
fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
        console.log(data);
    })
})