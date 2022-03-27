const path = require('path');

const express = require('express');
const chalk  = require('chalk');
const cors = require('cors');
const app = express();

const weather = require('./utils/weatherbox.js');
const geocode = require('./utils/mapbox.js');
const { response } = require('express');

const publicDirectoryPath = path.join(__dirname);
const port = process.env.PORT || 3000;
const fetchWeather = (location, callback)=>{
    geocode(location,(error,locationData)=>{
        if(error){
           const response = {
                ok: false,
                error: error
            }
            console.log(error);
            callback(response);
        } else {
            weather(locationData, (err, weatherData)=>{
            
                if(err){
                   const response = {
                        ok : false,
                        error : err
                    }
                    console.log(err);
                    return callback(response);
                } else {
                   const response = {
                       ...weatherData,
                        location : locationData.location,
                        
                    };
                    console.log(response);
                    return callback(response);
                }
            });
        }
    });
}
app.use(cors());
app.get('/',(req, res)=>{
    console.log(req.query);
    const location = req.query.location;
    if(location === ''){
        res.send({ok : false, error: 'Can`t search blank'});
    }  else {
        fetchWeather(location, resp =>{
            res.send(resp);   
        });
    }
}); 

app.listen(port, ()=>{
    console.log(chalk.green('Server is up on port ${port}'));
});