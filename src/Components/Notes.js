import { useState } from "react";

function Notes() {
  const [Notes, setNotes] = useState(localStorage.getItem("notes") ?? "");
  const handleChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };
  return (
    <div style={{ background: "black" }}>
      <div
        style={{
          background: "#F1C75B",
          width: "30vw",
          height: "60vh",
          padding: "16px",
          marginTop: "5px",
          position: "absolute",
          left: "620px",
          top: "5px",
          borderRadius: "19px",
          marginLeft: "20px",
        }}
      >
        <h1>All Notes</h1>
        <textarea
          onChange={handleChange}
          value={Notes}
          style={{
            background: "#F1C75B",
            width: "40vh",
            height: "60vh",
            border: "none",
            maxWidth: "40vw",
            maxHeight: "40vh",
            marginTop:"10px"
          }}
        />
      </div>
    </div>
  );
}
export default Notes;
