import React from "react";

const MovieHeader = (props) => {

    return(
        <>
            <div className="header">
                <h1>{props.heading}</h1>
            </div>
        </>
    );
}

export default MovieHeader;

