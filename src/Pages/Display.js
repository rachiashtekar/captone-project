// import Movies from "./Movies";
import React from "react";
// import "../Pages/Display.css";
import UserInfo from "../Components/UserInfo";
import Notes from "../Components/Notes"
import Weather from "../Components/Weather";
import News from "../Components/News";


function Display() {
  return (
    <div style={{background:"black",height:"682px"}}>
     
      <UserInfo/>
      <Notes/>
      <Weather/>
      <News/>
    </div>
  );
}
export default Display;
