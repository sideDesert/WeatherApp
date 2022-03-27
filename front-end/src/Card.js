import React from 'react';
import {ReactComponent as Pleasant} from './svgs/Pleasant.svg'
import {ReactComponent as BrokenCloud} from './svgs/broken-cloud.svg';
import {ReactComponent as Clear} from './svgs/clear.svg';
import {ReactComponent as FewCloud} from './svgs/few-clouds.svg';
import {ReactComponent as Mist} from './svgs/mist.svg';
import {ReactComponent as ScatteredCloud} from './svgs/scattered-cloud.svg';
import {ReactComponent as ShowerRain} from './svgs/shower-rain.svg';
import {ReactComponent as Snow} from './svgs/snow.svg';
import {ReactComponent as Thunderstorm} from './svgs/thunderstorm.svg';
import {ReactComponent as SunnyRain} from './svgs/sunny-rain.svg';

function WeatherLogo({code}){
    if(code<233 && code > 199){
        return <Thunderstorm/>
    }
    if(code < 322 && code>299){
        return <ShowerRain/>
    }
    if(code<505 && code> 499){
        return <SunnyRain/>
    }
    if(code === 511){
        return <Snow/>
    }
    if(code > 519 && code < 532){
        return <ShowerRain/>
    }
    if(code >599 && code < 623){
        return <Snow/>
    }
    if(code > 700 && code < 782){
        return <Mist/>
    }
    if(code === 800){
        return <Clear/>
    }
    if(code ===803 || code === 804){
        return <ScatteredCloud/>
    }
    if(code === 802){
        return <FewCloud/>
    }
    if(code === 801){
        return <Pleasant/>
    }
}

const Card = (props) => {
    return (
        <div className='card'>
            <div className='left'>
                <div className='logo'><WeatherLogo code = {props.code}/></div>
                <div>
                    <div><h2 className='temperature'>{props.temperature}°C</h2></div>
                    <div><h3 className='location'>{props.location}</h3></div>
                </div>
            </div>
            <div className='right'>
                <div style={{display: 'flex', justifyContent: 'center'}}><h2 className='weather'>{props.desc}</h2></div>
                <div>
                    <ul className='data'>
                        <li><span className='feelsLike'>Feels like</span> <span>{props.feelsLike}°C</span></li>
                        <li><span className='feelsLike'>Visibility</span> {props.visibility}</li>
                        <li><span className='feelsLike'>Wind Speed</span> {props.windSpeed}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;    
