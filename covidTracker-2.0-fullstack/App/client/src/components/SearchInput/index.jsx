import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import magnifying from '../../assets/magnifying-pic.png';

function SearchInput() {
  const capitalizeFirstLetter = (item) => item.charAt(0).toUpperCase() + item.slice(1);

  const [newSearch, setNewSearch] = useState('');

  return (
    <>
      <form className="form-container">
        <label htmlFor="search-input">
          <input
            id="search-input"
            placeholder="Search country"
            onChange={(event) => setNewSearch((capitalizeFirstLetter(event.target.value)))}
          />
          <button
            type="button"
          >
            <Link
              to={`/country/${newSearch}`}
            >
              <img src={magnifying} alt="icon" />
            </Link>
          </button>
        </label>
      </form>
    </>
  );
}

export default SearchInput;
