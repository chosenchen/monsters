import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => {
    return (
    <input className='search' type='search' placeholder={placeholder} onChange={handleChange}></input>)
}
// use functional component if you just return template and don't use internal state or lifecycle method