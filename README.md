


# // -------------------imp information----------------------------------//
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

  # ---------------------------------------------------------------------------------------------

  #                          About MovieBox componenet

  1 : export default function MovieBox({ data, selected, setSelected })

   It is set to receive three props - data, selected, and setSelected - using destructuring assignment.
   jsx   from the parent components which is movie.js


2:    const isSelected = selected.includes(data.id);
  This line declares a variable isSelected which is a boolean indicating whether the current genre (data.id) is present in the selected array.

3: if (selected.includes(data.id)) 

 : This condition checks if the current genre (data.id) is already present in the selected array. If it is, it means the genre is already selected.

 #  ------------------About local storage---------------

 1. The localStorage object is a type of web storage that allows you to store data with no expiration time.




