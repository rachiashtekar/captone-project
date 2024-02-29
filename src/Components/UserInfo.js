import React from 'react'
export default function UserInfo() {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    const movies = JSON.parse(localStorage.getItem("movies"));
  
    return (
    <div>
        
       
    
        <p>{info.name}</p>
        <p>{info.username}</p>
        <p>{info.email}</p>
        {movies.map((item)=>{
            return <div key={item}>{item}</div>;
        })}

    </div>
)}
