const key = 'a2bb94917d08a8e7932c4b7e3fb7ddd3';
// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=a2bb94917d08a8e7932c4b7e3fb7ddd3'
// fetch(baseURL).then((data) => {
//     console.log('response', data.json())
// }).catch((error) => {
//     console.log(error)

// })

const requestCity = async(city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;
    const response = await fetch(baseURL + query)
    const data = await response.json();
    return data;



}

requestCity('chennai');