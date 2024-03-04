import { useState } from "react";

function Notes(){
    const [Notes,setNotes]=useState(localStorage.getItem("notes")??"")
    const handleChange = (e) => {
        setNotes(e.target.value)
        localStorage.setItem("notes",e.target.value)
    }
    return (
        <div style={{background:"black"}}>
        <div   style={{background : "#F1C75B", width:"400px,",height:"400px",padding:"16px",marginTop:"5px",position: 'absolute',left:"620px",top:"5px",borderRadius:"19px",marginLeft:"20px"}} >
            <h1>Notes</h1>
            <textarea
            onChange={handleChange}
            value={Notes}

            style={{background : "#F1C75B", width:"30vh",height:"40vh",border:"none",maxWidth:"400px",maxHeight:"400px"}}

            
            
            />

        </div>
        </div>

    )

}
export default Notes;