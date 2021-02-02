import React, { useState } from 'react'
import './Movies.css'
const Movie = (props) => {
    const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=584dd146';

    return(
        <>
            <div className="main">
               {props.movies.map((movie, index) => (
                    <div>
                        <img src={movie.Poster} alt='Image'/>
                        <h4>{movie.Title}</h4>
                    </div>
               ))} 
           
            </div>
        </>
    )
}

export default Movie;