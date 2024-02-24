


// -------------------imp information----------------------------------//
#  command 1.  npm i react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

<BrowserRouter>  // Configuration of routes
      <Routes> //  routes taking the number of router or which we want to redirect
        <Route path="/register" element={<Register />} /> // route taking path and components
        <Route path="/movies" element={<Movies />} />
        <Route path="/display" element={<Display />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>

