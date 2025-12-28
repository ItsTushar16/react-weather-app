import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const[city,setCity]=useState("");
    const[error,setError]=useState(false);
 
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="a5e1e4874acd25f173f9cc0586f22aae";

    let getWeatherInfo = async()=>{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            feelsLike:jsonResponse.main.feels_like,
            humidity:jsonResponse.main.humidity,
            weather:jsonResponse.weather[0].description,

        }
        console.log(result);
        return result;
    }


    let handleCity=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let info= await getWeatherInfo();
            updateInfo(info);
        }catch(err){
            setError(true);
        }
       
    }


    return(
        <div className='SearchBox'>
            
            <form action="#" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleCity}/>
                <br /><br />
                <Button type="submit" variant="contained" endIcon={<SendIcon /> }> Search
                </Button>
                <p style={{color:"red"}}>{error && "No Such Place In Our API"}</p>
            </form>
        </div>
    )

}