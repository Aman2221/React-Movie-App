import React from 'react'
import './SearchBox.css'

const SearchBox = (props) => {
    return (
        <>
        <div className='searchBox'>
            <h1><i class="fas fa-video"></i><span>M</span>ovies</h1>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Help</li>
            </ul>
            <input 
                type="text" value={props.value} 
                onChange={(event) => props.setSearchVal(event.target.value)}
                placeholder='Search'
            />
            <i class="fas fa-search"></i>
        </div>
        </>
    );
}

export default SearchBox;