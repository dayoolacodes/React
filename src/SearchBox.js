import React from'react';

const SearchBox = ({searchField, onSearch}) => {
    return(
        <div>
        <input 
        className="tc pa1 bg-light-blue br3" 
        type="search" 
        placeholder="Search-Robot" 
        value = {searchField}
        onChange = {onSearch}
        />
        </div>
    )

}
export default SearchBox;