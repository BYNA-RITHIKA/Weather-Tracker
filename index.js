const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-header img');
const card = document.querySelector('.back-card')

const kelvinToCelsius = (kelvin) => {
    celsius = Math.round(kelvin - 273.15);
    return celsius;
}

const isDayTime = (icon) => {
    if (icon.includes('d')) {
        return true;
    } else {
        return false;
    }
}

updateWeather = (city) => {

    console.log(city);
    const imageName = city.weather[0].icon;
    const icon = `https://openweathermap.org/img/wn/${imageName}@2x.png`;
    cityName.textContent = city.name;

    cardBody.innerHTML = `
    <div class="card-mid row">
                    <div class="col-8 text-center temp">
                        <span>${kelvinToCelsius(city.main.temp)}&deg;C</span>
                    </div>
                    <div class="col-4 condition-temp">
                        <p class="condition">${city.weather[0].description}</p>
                        <p class="high">${kelvinToCelsius(city.main.temp_max)}&deg;C</p>
                        <p class="low">${kelvinToCelsius(city.main.temp_min)}&deg;C</p>

                    </div>
                </div>
                <div class="icon-container card shadow mx-auto">
                <img src="${icon}">
            </div>
            <div class="card-footer px-5 py-4 row">
                <div class="col text-center">
                    <p>${kelvinToCelsius(city.main.feels_like)}&deg;c</p>
                    <span>It feels like</span>
                </div>
                <div class="col text-center">
                    <p>${city.main.humidity}%</p>
                    <span>Humidity</span>
                </div>
            </div>
        </div>

        
    `
    if (isDayTime(imageName)) {
        console.log("day");
        timeImage.setAttribute('src', 'images/day_image.svg');
        cityName.classList.add('text-black')
    } else {
        console.log("nyt");
        timeImage.setAttribute('src', 'images/night_image.svg');
        cityName.classList.add('text-white')


    }
    card.classList.remove('d-none')
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityValue.value.trim();
    console.log(city);
    searchForm.reset();

    requestCity(city)
        .then((data) => {
            updateWeather(data);
        }).catch((error) => {
            console.log(error);
        })
})