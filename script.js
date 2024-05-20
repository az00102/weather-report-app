const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7262cc84e7mshbf708e30c1445d6p1d2c7cjsnef774c291905',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchWeather(city) {
	try {
		const response = await fetch(url + city, options);
		const result = await response.json(); 
		document.getElementById('cityName').innerHTML = city;
		console.log(result);
		document.getElementById('minTemp').innerHTML = result.min_temp;
		document.getElementById('maxTemp').innerHTML = result.max_temp;
		document.getElementById('feelsLike').innerHTML = result.feels_like;
		document.getElementById('temp').innerHTML = result.temp;
		document.getElementById('cloud_pct').innerHTML = result.cloud_pct;
		document.getElementById('humidity').innerHTML = result.humidity;
		document.getElementById('wind_speed').innerHTML = result.wind_speed;
		document.getElementById('wind_degrees').innerHTML = result.wind_degrees;
	} catch (error) {
		console.error(error);
	}
}

document.getElementById('search').addEventListener("click", (e) => {
	e.preventDefault();
	const city = document.getElementById('city').value;
	fetchWeather(city);
});

fetchWeather("Dhaka");
