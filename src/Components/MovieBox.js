export default function MovieBox({ data, selected, setSelected }) {
    const isSelected = selected.includes(data.id);
    const handleClick = () => {
      if (selected.includes(data.id)) {
        setSelected((prev) => prev.filter((item) => item !== data.id));
      } else {
        setSelected((prev) => {
          return [...prev, data.id];
        });
      }
    };
    return (
      <div
        onClick={handleClick}
        style={{
          background: data.color,
          textAlign: "center",
          width: "10vw",
          border: isSelected ? "5px solid green" : "",
          borderRadius:"20px"
       
         
        
        }}
      >
        <p>{data.id}</p>
        {data.image}
      </div>
    );
  }