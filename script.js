const apikey = '61e71512b5e2dff84d1594ff9d826ba8';
const input = document.querySelector('input');
const btn = document.getElementById('btn');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');



btn.addEventListener('click', ()=> {
    let city =  input.value;
    getWeather(city);
    
})


function getWeather(city) {
    console.log(city);


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'61e71512b5e2dff84d1594ff9d826ba8'}`).then(response=>response.json()).then(data=>{
        console.log(data);
    const iconCode = data.weather[0].icon;
    icon.innerHTML = `<img src ="http://openweathermap.org/img/wn/${iconCode}.png" alt = "weatherIcon"></img>`
    const weatherCity = data.name;
    const weatherCountry = data.sys.country;
    weather.innerHTML = `${weatherCity}, ${weatherCountry}`
    let weatherTemp = data.main.temp;
    weatherTemp = weatherTemp - 273;
    const temp = weatherTemp.toFixed(2)
    temperature.innerHTML = `${temp}°C`
    const weatherDesc = data.weather[0].description;
    description.innerHTML = weatherDesc;
    })
    // https://openweathermap.org/img/wn/10d@2x.png
    
    
    
    
}




























