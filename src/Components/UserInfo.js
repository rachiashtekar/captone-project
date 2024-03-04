import React from "react";
import "../Pages/UserInfo.css";
import ProfileBig from "../asset/ProfileBig.png";
export default function UserInfo() {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const movies = JSON.parse(localStorage.getItem("movies"));

  return (
    
       <div className="container-one">
       <div className="div-1-1">
            <div className="image-profilebig">
              <img className="ProfileBig" src={ProfileBig} />
            </div>

            <div className="div-1-1-1">
              <p className="Name-1">{info.name}</p>
              <p className="Email-3">{info.email}</p>
              <p className="Username-2">{info.username}</p>

              {movies.map((item) => {
                return (
                  <div
                    className="items"
                    style={{
                      background: "#9F94FF",
                      borderRadius: "12px",
                      marginBottom: "8px",
                      padding: "6px",
                      textAlign: "center",
                      height: "20px",
                      width: "100px",
                    }}
                    key={item}
                  >
                    {item}
                  </div>
                );
              })}

            </div>
            </div>
          
        </div>
        
  );
} 
 
