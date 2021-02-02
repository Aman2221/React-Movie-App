import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import MovieHeader from "./components/MovieHeader";
import SearchBox from "./components/SearchBox";
import Footer from './components/Footer'
import FullPreview from "./components/FullPreview";
import './App.css';

function App() {
  const [movies,setMovies] = useState([]); 
  const [SearchVal, setSearchVal] = useState('');
  const [heading, setHeading] = useState([]);

  const getMovieRequest = async(SearchVal) => {
    const url = `http://www.omdbapi.com/?s=${SearchVal}&apikey=584dd146`;

    const response = await fetch(url);
    const responseJSON = await response.json();
    if(responseJSON.Search) {
    setMovies(responseJSON.Search);
    setHeading(responseJSON.Search)
    }
  }
  useEffect( () => {
    getMovieRequest(SearchVal);
  }, [SearchVal]);

  return (
    <>
      <div className='container'>
        <SearchBox SearchVal={SearchVal} setSearchVal={setSearchVal}/>
        <MovieHeader/>
        <Movie movies={movies} heading={heading}/>
      </div>
    </>
  );
}

export default App;
