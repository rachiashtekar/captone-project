import { useState } from "react";
import { useEffect } from "react";

function Weather() {
  const [Weather, setWeather] = useState(null);
  const [date,setDate]=useState((''))
  const [time,setTime]=useState(0)

  useEffect(() => {
    fetch(
      "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=f3tUY1TuhjoN3fGstubb0MKhnjAoCxo3"
    )
      .then((data) => data.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(Weather);
//   useEffect(() => {
//     const currentDate = new Date();
//     const formattedDate = currentDate.toLocaleDateString();
//     setDate(formattedDate);
//   }, []);
useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    setDate(formattedDate);
    setTime(formattedTime);
  }, []);
  
  
  return (
    <div
      style={{
        background: "#101744",
        width: "580px",
        height: "150PX",
        // padding: "16px",
        color: "white",
        marginTop: "10px",
        marginLeft: "10px",
        borderRadius: "19PX",
      }}
    >
      <div 
        style={{ height: "50px", width: "578px", background: "#FF4ADE",borderRadius:"33.43px 33.43px 0px 0px",display:"flex",justifyContent: " space-between",
    }}
      >
        <p style={{marginLeft:"40px",marginTop:"15px",fontSize:"20px",fontWeight:"400"}}>{date}</p>
        <p style={{marginRight:"50px",marginTop:"15px",fontSize:"20px",fontWeight:"400"}}>{time}</p>
      </div>
      <p>Weather</p>
      {/* {Weather
        ? Weather.timelines.daily[0].values.temperatureAvg < 30
          ? "Sunny"
          : "Winter"
        : "Loading..."}
      <p>Temprature</p>
      {Weather ? Weather.timelines.daily[0].values.temperatureAvg : "Loading"}

      <p>Humidity</p>
      {Weather ? Weather.timelines.daily[0].values.humidityAvg : "Loading"}

      <p>Wind</p>
      {Weather ? Weather.timelines.daily[0].values.windGustAvg : "Loading"} */}
    </div>
  );
}
export default Weather;
