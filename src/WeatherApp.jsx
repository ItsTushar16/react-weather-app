import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react"

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"delhi", 
        temp: 21.02, 
        tempMin: 21.02, 
        tempMax: 21.02, 
        feelsLike: 20.3,
        humidity:43,
        weather:"haze",
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result)
    }

    return(
        <div>
            <h2 style={{textAlign:"center"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    )
}
