import React from 'react'
import './FullPreview.css';

const FullPreview = (props) => {
    return(
        <>
           <div className="Preview">
            {props.movies.map((movie, index) => (
                <div id='FullPreview'>
                    <div>
                        <img src={movie.Poster} alt='Image'/>
                    </div>
                    <div id='content'>
                    <h3>Details</h3>
                        <p><span>Title : </span>{movie.Title}</p>
                        <p><span>Year : </span>{movie.Year}</p>
                        <p><span>Type : </span>{movie.Type}</p>
                        <p><span>imdbID : </span>{movie.imdbID}</p>
                    </div>
                </div>
            ))} 
           </div>
        </>
    );
}

export default FullPreview;