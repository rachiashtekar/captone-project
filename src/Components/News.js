import { useEffect, useState } from "react";

function News(){
    const [News,setNews]=useState(null);
    useEffect(()=>{
        fetch("https://api.worldnewsapi.com/search-news")
    })
    return (
        <div style={{marginTop:"20px"}}>
            News

        </div>

    )
}
export default News;