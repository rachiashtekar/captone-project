import { useEffect, useState } from "react";

function News(){
    // const [News,setNews]=useState(null);
    // useEffect(()=>{
    //     fetch("https://api.worldnewsapi.com/search-news?text=nagpur&language=en&api-key=602b6c39c9e1421581f7778247c07437")
    //     .then((data) => data.json())
    //     .then((data) => setNews(data))
    //     .catch((error) => console.log(error));
    // }, []);
         console.log(News)

    return (
        <div style={{marginTop:"10px",height:"500px",width:"350px",position:"absolute",top:"10px",left:"1160px",background:"white",borderRadius:"19px",alignItems:"centre"}}>
       {/* {News? <img style={{height:"300px",width:"340px",position:"relative",left:"5px",top:"5px",right:"5px"}} alt='img' src={News.news[0].image}/>:<></>}
       {News?<h1 style={{color:"black",background:"white",fontSize:"30px"}}>{News.news[0].title}</h1>:<></>}
       {News ? <p style={{color:"black",background:"white",fontSize:"18px"}}>{News.news[0].text.slice(0, 350)}...</p> : <></>} */}
       * {News? <img style={{alignItems:"center"}} alt='img' src="https://tse4.mm.bing.net/th?id=OIP.Rk9mQSpeenSA9qnGCimtZQHaEG&pid=Api&P=0&h=180"/>:<></>}
       {News? <h1 style={{color:"black",background:"white"}}>If we read every piece of content put in front of us each day, we’d get nothing else done. Instead, we skim.</h1>: <></>} 
       {News? <p style={{color:"black",background:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i </p>:<></>} 

        </div>

    )
}
export default News;