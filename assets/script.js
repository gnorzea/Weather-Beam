var form = document.querySelector(".search-box form");

var getSearch = function (search) {

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var inputValue = event.target.value

        var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?q=" + inputValue + "&appid=" + apiKey;

        var apiKey = "120ea77b2ce7d183b863517d294c0544"

        fetch(apiUrl).then(function (response) {

            response.json().then(function (data) {
                console.log(data);
            })

                .catch(function (error) {
                    msg.textContent = "Please enter a valid city";
                });
        })
    })
};

getSearch("boynton beach");