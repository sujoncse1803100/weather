
const key = "58c2ed7ac308c8eecda65fee3e0a4f31";


function checkWeather(temp) {
    
    $('#name').text(temp.name);
    $('#temp').text(temp.main.temp);
    $('#condition').text(temp.weather[0].main);

    const imageUri = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    $('#icon').attr('src', imageUri);
}

$('#btn').click(() => {
    const city = $('#city').val();
    const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    fetch(uri)
        .then((response) => response.json())
        .then((data) => checkWeather(data))
        .catch(error => {});
});

