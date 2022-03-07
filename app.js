const API_KEY = `bfc784a6f5bb42373977cb27b3aeeeb2`
const searchCity = () => {
    // e.preventDefault()
    const city = document.getElementById('city-name').value;
    // ignoring white space faster 
    cityText = city.replace(/\s+/g, '');
    console.log(cityText)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}

const displayTemperature = data => {
    console.log(data)
    let cityName = document.getElementById('city')
    cityName.innerText = `${data.name}`;
    let temperature = document.getElementById('temperature')
    temperature.innerText = `${data.main.temp}`
    let description = document.getElementById('description')
    description.innerText = `${data.weather[0].description}`
}
