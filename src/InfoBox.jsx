import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    let  ImgURL="https://images.unsplash.com/photo-1640624728340-a7cc8fda4a7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    
    return(
        <div className='infoBox'>
            <h2>Weather Info for {info.city}</h2>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 ? RAIN_URL
                        : info.temp>25 ? HOT_URL
                        :COLD_URL
                    }
                    title="green iguana"/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city} 
                    {
                        info.humidity > 80 ? <ThunderstormIcon/>
                        : info.temp>25 ?<SunnyIcon/>
                        :<AcUnitIcon/>
                    }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Temperature Max: {info.tempMax}&deg;C</p>
                    <p>Temperature Min: {info.tempMin}&deg;C</p>
                    <p>Humidity:{info.humidity}</p>
                    <p>the weather is <b>{info.weather} </b>and feels like <b>{info.feelsLike}&deg;C</b></p>
                </Typography>
                </CardContent>
            </Card>

            </div>
            
        </div>
    )
}