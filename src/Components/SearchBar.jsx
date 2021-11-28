import React from 'react';
import '../Sass/SearchBar.scss';

const SearchBar = ({ search }) => {
    return (
        <div className="search-bar">
            <input type='search' placeholder="Search monsters here" onChange={search} />
        </div>
    )
}

export default SearchBar;