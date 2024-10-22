import React, { useEffect, useState } from "react";
import AppContext from "./Context";
import axios from "axios";

export const ProductContext = React.createContext({});
function AppProvider({children}) { // App
  const [producers, setProducers] = useState([]);
  const [movies, setMovies] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        // get : lấy data về
        const resProducers = await axios.get(`http://localhost:9999/producers`);
        setProducers(resProducers.data);
        const resMovie = await axios.get(`http://localhost:9999/movies`);
        setMovies(resMovie.data);
        const resStars = await axios.get(`http://localhost:9999/stars`);
        setStars(resStars.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(movies);
  const getStarById = (starId) => {
    return stars.find((star) => star.id == starId)?.fullname;
  };
  console.log(getStarById(1));
  
  const data = {
    producers,
    movies, setMovies, setProducers,stars,setStars, getStarById
  };
  return <AppContext.Provider value={data}>
        {children} 
    </AppContext.Provider>;
}

export default AppProvider;
