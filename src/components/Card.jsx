import React, {useEffect, useState} from "react";
import {BsFillDropletFill, BsFillCloudRainFill} from "react-icons/bs";
import {BsMoonFill, BsWater, BsFillCloudLightningRainFill, BsFillCloudMoonFill, BsSun, BsCloudSunFill, BsFillCloudFill, BsCloudsFill, BsFillCloudRainHeavyFill} from "react-icons/bs";
import {FaSnowflake, FaCloudSunRain, FaCloudMoonRain} from "react-icons/fa";
import weatherIcons from "../weatherIcons";
import {FiWind} from "react-icons/fi";

import "./Card.css";

function Card(props){
    const iconName = "I" + props.current.weather[0].icon;
    const temperature = props.current.temp- 273.15;
    const weather = props.current.weather[0].description;
    const humidity = props.current.humidity;
    const speed = props.current.wind_speed;
    const precipitation = props.precipitation;

    function handleIcon(){
    
        if(iconName == "I01d")
            return <BsSun/>;
        else if(iconName == "I02d")
            return <BsCloudSunFill/>;
        else if(iconName == "I03d")
            return <BsFillCloudFill/>
        else if(iconName == "I04d")
            return  <BsCloudsFill/>
        else if(iconName == "I09d")
            return <BsFillCloudRainHeavyFill/>
        else if(iconName == "I10d")
            return <FaCloudSunRain/>
        else if(iconName == "I11d")
            return <BsFillCloudLightningRainFill/>
        else if(iconName == "I13d")
            return <FaSnowflake/>
        else if(iconName == "I50d")
            return <BsWater/>
        else if(iconName == "I01n")
            return <BsMoonFill/>;
        else if(iconName == "I02n")
            return <BsFillCloudMoonFill/>;
        else if(iconName == "I03n")
            return <BsFillCloudFill/>
        else if(iconName == "I04n")
            return  <BsCloudsFill/>
        else if(iconName == "I09n")
            return <BsFillCloudRainHeavyFill/>
        else if(iconName == "I10n")
            return <FaCloudMoonRain/>
        else if(iconName == "I11n")
            return <BsFillCloudLightningRainFill/>
        else if(iconName == "I13n")
            return <FaSnowflake/>
        else if(iconName == "I50n")
            return <BsWater/>
    }

    function handleDelete(){
       props.onDelete(props.id);
    }

    function createDay(day, i){
        if(i === 7) return
        var date = String(new Date(day.dt*1000));
        let dayName = date.substring(0, 3);

        return(
            <div className="day" key={i}>
                <h1 className="dayName">{dayName}</h1>
                <div className="dayTemp">{(day.temp.day-273.15).toFixed(2)}<span>&#176;</span></div>
            </div>
        );
    }

    return (
            <div className="card-container">
                <div className="content">
                    <h1 className="card-Location">
                        {props.name}
                        <hr />
                    </h1>
                    
                    <div className="card-temperature">
                        <div className="temperature-number">
                            {temperature.toFixed(2)}<span>&#176;</span>
                        </div>

                        <div className="weather-char">
                            <div className="char">
                                <h1 className="charHead">Humidity <BsFillDropletFill/></h1>
                                <span className="char-value">{humidity}%</span>
                            </div>
                            <div className="char">
                                <h1 className="charHead">Precipitation <BsFillCloudRainFill/></h1>
                                <p className="char-value">{precipitation}%</p>
                            </div>
                            <div className="char">
                                <h1 className="charHead">Wind <FiWind/></h1>
                                <p className="char-value">{speed} m/s</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-weather">
                        <div className="weather-img">
                            {handleIcon()}
                        </div>
                        <div className="weather-name">
                            {weather}
                        </div>
                        </div>
                    <div className="days-list">
                        {props.daily.map(createDay)}
                    </div>
                </div>
                <div className="card-content">
                    <a href={props.link} onClick={handleDelete} className="card-btn">Remove</a>
                </div>
            </div>
    );
}

export default Card;