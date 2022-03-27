const request = require('postman-request');

const geocode = (location, callback)=>{
    let geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1Ijoic2lkZGFydGgtcyIsImEiOiJja2cwaXJjd2kwdzh0MnpxZjcwYW1zMjB5In0.lCAp3XEsnmtrCIiqGtk_iw&limit=1`;
    request({url: geocodeUrl, json: true},(error, response)=>{
        console.log(response.body);
        if(error){
            callback('Unable to connect to geolocation services', undefined);
        }else if(response.body.features.length===0){
            callback('Unable to find location', undefined);
        } else {
            const data = response.body.features[0];
            callback(undefined, {
                latitude: data.center[1],
                longitude: data.center[0],
                location: data.place_name
            });
        }
    });
}



module.exports = geocode;