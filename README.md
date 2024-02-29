


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

 1. local Storage
 
 The localStorage object is a type of web storage that allows you to store data with no expiration time.


 2. setItem Method:

The setItem method is used to store data in the local storage.
It takes two parameters: a key and a value.
The key is a string that acts as an identifier for the data you want to store.
The value is the data you want to store, and it must be a string.

3. Json Stringify
When storing complex data structures (e.g., arrays or objects), it's common to convert them to JSON strings using JSON.stringify.

4. const info = JSON.parse(localStorage.getItem("userInfo"));

This line retrieves the user information from local storage using the key "userInfo".
localStorage.getItem("userInfo") retrieves the stored string value.

5. JSON.parse is then used to parse the JSON string and convert it into a JavaScript object.



