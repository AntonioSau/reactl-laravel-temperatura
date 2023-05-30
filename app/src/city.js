import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function City({ selectedValue }) {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState([]);

   
  useEffect(() => {
    axios.get('http://127.0.0.1:80/api/city/p2lbgWkFrykA4QyUmpHihzmc5BNzIABq/'+selectedValue)
      .then(response => { 
        setCity(response.data.city);
        setWeather(response.data.weather);
        
      })
      .catch(error => {
        console.error(error);
      });
  }, [selectedValue]);

  
  function getNameDay(myDate){
    const date = new Date(myDate);
    const options = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
  }

  function getAbbrDate(myDate){
    const date = new Date(myDate);
    const options = { day: 'numeric', month: 'short' };
    const dateString = date.toLocaleDateString('en-US', options);
    return dateString; // Output: "7 Oct"
  }

  function getIconWeather(myIcon){

    if (myIcon >= 60 && myIcon < 70) {
        return 'images/icons/icon-9.svg';
      } else if (myIcon === 80) {
        return 'images/icons/icon-9.svg';
      } else if (myIcon === 3) {
        return 'images/icons/icon-6.svg';
      } else if (myIcon >= 40 && myIcon < 50 ) {
        return 'images/icons/icon-10.svg';
      }
    
      return 'images/icons/icon-1.svg';
  }
 
  
  function getTemperature( max, min ){
    return parseInt( (max+min)/2 );

  }
  

  return (
    <div id="city_status" className="forecast-table"    >
        <div className="container">
            <div className="forecast-container">
 
                <div className="today forecast">                        
                    <div className="forecast-header">
                        {weather && weather.daily &&
                        <div className="day">{ getNameDay(weather.daily.time[0]) }</div>
                        }
                        {weather && weather.daily &&
                        <div className="date">{ getAbbrDate(weather.daily.time[0]) }</div>
                        }
                    </div> 
                    <div className="forecast-content">
                        <div className="location">{city.name }</div>
                        
                        <div className="degree">
                            {weather && weather.current_weather &&
                            <div className="num">{ parseInt(weather.current_weather.temperature) }<sup>o</sup>C</div>
                            }    
                            <div className="forecast-icon">
                                {weather && weather.daily &&
                                <img src={ getIconWeather(weather.daily.weathercode[0]) } alt="" width="90" />
                                }
                            </div>	
                        </div>
                        
                        {weather && weather.daily &&
                        <span><img src="images/icon-umberella.png" alt="" />{ weather.daily.precipitation_probability_mean[0]}%</span>
                        }
                        {weather && weather.current_weather &&
                        <span><img src="images/icon-wind.png" alt="" />{ weather.current_weather.windspeed }km/h</span>
                        }
                        <span><img src="images/icon-compass.png" alt="" />East</span>
                            
                    </div>
                </div>

                            
                {[...Array(5)].map((_, i) => (
                     
                    <div className="forecast">
                        <div className="forecast-header">
                            {weather && weather.daily &&
                            <div className="day">{ getNameDay(weather.daily.time[i+1]) }</div>
                            } 
                        </div>
                        <div className="forecast-content">
                            <div className="forecast-icon">
                                {weather && weather.daily &&
                                <img src={getIconWeather(weather.daily.weathercode[i+1])} alt="" width="48" />
                                }
                            </div>
                            { weather && weather.daily && 
                            <div className="degree">{ getTemperature( weather.daily.temperature_2m_max[i+1],weather.daily.temperature_2m_min[i+1]) }<sup>o</sup>C</div>
                            }
                            {weather && weather.daily &&
                            <small>{ weather.daily.precipitation_probability_mean[i+1]} %<sup></sup></small>
                            }
                        </div>
                    </div>
                
                ))}    
                
          
            </div>
        </div>
    </div>
  );
}

export default City;


