const request = require('postman-request');

const key = 'f986a10afe97a1bbb3ee8107a7c60114';

const weather = (location, callback)=>{
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=hourly,daily&appid=f986a10afe97a1bbb3ee8107a7c60114&units=metric`;

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to weather services!', undefined)
        } else if(response.body.cod == 400){
            callback('Unable to find location for weather', undefined);
        } else {
            const data = response.body;
            //console.log(data);
            const temperature = data.current.temp;
            const feelsLikeTemperature = data.current.feels_like;
            const description = {
                main: data.current.weather[0].main,
                description: data.current.weather[0].description
            }
            const clouds = data.current.clouds;
            const visibilty = data.current.visibility;
            const windSpeed = data.current.wind_speed;
            const code = data.current.weather[0].id;
            callback(undefined, {
                temperature: temperature,
                feelsLike: feelsLikeTemperature,
                description: description,
                clouds: clouds,
                visibilty: visibilty,
                windSpeed: windSpeed,
                code: code
            });
        }
    });

}


module.exports = weather;