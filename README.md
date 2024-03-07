


# // -----------imp information---------------------//
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

  # ---------------------------------------------------------

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

# -------------------------About useEffect and Fetch function-------------------------------
  # -------------------------------Weather part----------------------------------------

1. The reason for using useEffect with fetch is to ensure that the data fetching and related operations occur at the appropriate time in the component's lifecycle. By placing it in a useEffect with an empty dependency array ([]), you can make sure that the fetch operation only happens once when the component mounts.

2.  why we used API key after the API link

:-  An API key is often used as a means of authentication and authorization when making requests to an API. It serves as a unique identifier for the client (your application) and is typically required by the server to ensure that only authorized users or applications can access the API.

3. fetch("https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=f3tUY1TuhjoN3fGstubb0MKhnjAoCxo3")

:- This line initiates a network request using the fetch function to the Tomorrow.io API endpoint. It's fetching weather forecast data for a specific location (latitude 42.3478, longitude -71.0466) with the provided API key.

4. .then((data) => setWeather(data))

:- This is the next part of the promise chain. It takes the parsed JSON data and uses the setWeather function to update the state variable Weather with this data. This assumes that the response from the API contains the weather information in a JSON format.

5. .catch((error) => console.log(error));

:- This part of the promise chain catches any errors that might occur during the fetch or JSON parsing process and logs them to the console.

# <!-- #---------------------------------------------------------------------------------------------------->

# ---------------------------------News components-----------------------------------
{News.news[0].text.slice(0, 350)}...
News.news[0].text:

1. News seems to be an object or an array with a property or key named news. The [0] indicates that you are accessing the first element of this news array.
The assumption is that each element in this array has a property or key named text.
.slice(0, 350):

2. The .slice() method is being used on the text property of the first news element. This method extracts a portion of a string.
In this case, it starts at index 0 and ends at index 349 (not including the character at index 350).
This means it is extracting the first 350 characters of the text property.
...:

3. The ellipsis (...) at the end indicates that the text is being truncated, and more content follows. It's commonly used to suggest that there is additional content that is not currently displayed.


 #       <!--------------- ----------------------------------------------------------------------->

 # ------------------------Timer Components----------------------------------------

 1. CountdownCircleTimer is a component from the "react-countdown-circle-timer" library.


 2. <CountdownCircleTimer> is a component from the "react-countdown-circle-timer" library, which is used to create a circular countdown timer.


 3. isPlaying={isPlaying}: This prop controls whether the countdown is actively playing or paused. It is set based on the state variable isPlaying.

 4. 