import React, { useEffect, useState } from "react";

export const HeaderWidget = () => {

   const [weatherData, setWeatherData] = useState(null)

  /*   useEffect (() = {
        fetch('https://api.openweathermap.org/data/3.0/onecall?q={Moscow,Russia}{d48e7c045c72d585247a9bd9df8326c3}')
        .then((data) => { console.log(data);})

        }, []) */
    return (
        <div className='header-weather-widget'> 
            <p className='header-weather-widget__label'>Погода на сегодня в Москве</p>
            <div className='header-weather-widget__weather-data'>тут будет погода</div>

        </div>
    )
}
