import Action from "../asset/Action.png";
import Drama from "../asset/Drama.png";
import Fantasy from "../asset/Fantasy.png";
import Fiction from "../asset/Fiction.png";
import Horror from "../asset/Horror.png";
import Music from "../asset/Music.png";
import Romance from "../asset/Romance.png";
import Thriller from "../asset/Thriller.png";
import Western from "../asset/Western.png";
import MovieBox from "../Components/MovieBox";
import MovieChip from "../Components/MovieChip";
import Vector from "../asset/Vector.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Movies.css";
const genres = [
  {
    name: "Action",
    id: "action",
    color: "#FF5209 ",
    image: <img style={{ width: "130px", height: "110px" }} src={Action} />,
  },
  {
    name: "Drama",
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "130px", height: "110px" }} src={Drama} />,
  },
  {
    name: "Romance",
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "130px", height: "110px" }} src={Romance} />,
  },
  {
    name: "Thriller",
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "130px", height: "110px" }} src={Thriller} />,
  },

  {
    name: "Western",
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "130px", height: "110px" }} src={Western} />,
  },
  {
    name: "Horror",
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "130px", height: "110px" }} src={Horror} />,
  },
  {
    name: "Fantasy",
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "130px", height: "110px" }} src={Fantasy} />,
  },
  {
    name: "Music",
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "130px", height: "110px" }} src={Music} />,
  },
  {
    name: "Fiction",
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "130px", height: "110px" }} src={Fiction} />,
  },
];

export default function Movies() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    if (selected.length < 3) {
      // console.log("selected")
      return;
    } else {
      navigate("/display");
    }
  };

  return (
    <div className="container">
      <div className="container1">
        <p className="para-1">Super app</p>
        <p className="para-2">Choose your entertainment category</p>
      </div>

      <div
        className="container2"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gridTemplateRows: "0fr 0fr 0fr ",
          padding: "10px",
          gap:"10px",
          height:"120px",
        
        }}
      >
        {genres.map((genres) => {
          return (
            <MovieBox
              key={genres}
              data={genres}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>

      <div className="chip"
        style={{
          display: "flex",
          marginTop: "12px",
          marginBottom: "12px",
          gap: "12px",
         
          
        }}
      >
        {selected.map((item) => {
          return (
            <MovieChip
              key={item}
              data={item}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>

      <div className="warning">{selected.length < 3 ? <p> <img src="Vector.png"/>  Minimum 3 categories required</p> : <></>}</div> 
      <div className="next-page-btn">
       {/* <div className="warning">{selected.length < 3 ? <p>Minimum 3 categories required</p> : <></>}</div>  */}
        <button  onClick={handleClick} className="btn2">
          Next page
        </button>

        
      </div>

     </div>
  );
}
