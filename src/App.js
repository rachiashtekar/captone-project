// import './App.css';
import './Components/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./Components/RegisterForm";
import Register from "./Pages/Register";
import Movies from "./Pages/Movies";
import Display from "./Pages/Display";
import Browse from "./Pages/Browse";

function App() {
  return (
      <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/display" element={<Display />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
