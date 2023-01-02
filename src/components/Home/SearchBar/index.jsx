import React from 'react'
import './styles.css'

const SearcgBar = ({value, handleSearchKey, clearSearch, formSubmit}) => (
    <div className="searchBar-wrap">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder="Search By Category"
          value={value}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button><span className='button-text'>search</span></button>
      </form>
    </div>
  );


export default SearcgBar