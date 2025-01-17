import React from 'react'

const SearchBar = () => {
  return (
    <form className="searchbar" 
    onSubmit={handleSearch} >
        <div className="searchbar__item">
            <SearchManufacture />
        </div>
    </form>
  )
}

export default SearchBar;
