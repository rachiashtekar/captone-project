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
        <div style={{marginTop:"10px",height:"500px",width:"350px",position:"absolute",top:"10px",left:"1160px",background:"white"}}>
       {/* {News? <img style={{height:"300px",width:"340px"}} alt='img' src={News.news[0].image}/>:<></>}
       {News?<h1 style={{color:"black",background:"white",fontSize:"30px"}}>{News.news[0].title}</h1>:<></>}
       {News ? <p style={{color:"black",background:"white",fontSize:"18px"}}>{News.news[0].text.slice(0, 300)}...</p> : <></>} */}
       {News? <img style={{alignItems:"center"}} alt='img' src="https://tse4.mm.bing.net/th?id=OIP.Rk9mQSpeenSA9qnGCimtZQHaEG&pid=Api&P=0&h=180"/>:<></>}
       {News? <h1 style={{color:"black",background:"white"}}>If we read every piece of content put in front of us each day, we’d get nothing else done. Instead, we skim.</h1>: <></>} 
       {News? <p style={{color:"black",background:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essenti The chunks that are read from a response are not broken neatly at line boundaries and are Uint8Arrays, not strings. If you want to fetch a text file and process it line by line, it is up to you to handle these complications. The following example shows one way to do this by creating a line iterator (for simplicity, it assumes the text is UTF-8, and doesn't handle fetch errors).The chunks that are read from a response are not broken neatly at line boundaries and are Uint8Arrays, not strings. If you want to fetch a text file and process it line by line, it is up to you to handle these complications. The following example shows one way to do this by creating a line iterator (for simplicity, it assumes the text is UTF-8, and doesn't handle fetch errors).The chunks that are read from a response are not broken neatly at line boundaries and are Uint8Arrays, not strings. If you want to fetch a text file and process it line by line, it is up to you to handle these complications. The following example shows one way to do this by creating a line iterator (for simplicity, it assumes the text is UTF-8, and doesn't handle fetch errors) </p>:<></>}

        </div>

    )
}
export default News;