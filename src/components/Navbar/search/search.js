import React from 'react'
import './search.css';
import { BsSearch } from 'react-icons/bs';


function search() {
    return (
        <div className="container">
        <div className="search-box">
           <input type="text" className="search-input" placeholder="Search.."/>
     
           <button className="search-button">
             <BsSearch/>
           </button>
        </div>
     </div>
    )
}

export default search
