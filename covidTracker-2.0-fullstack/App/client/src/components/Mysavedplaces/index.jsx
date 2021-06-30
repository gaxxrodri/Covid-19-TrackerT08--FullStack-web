import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import SearchInput from '../SearchInput';
import './style.scss';

const MySavedPlaces = ({ favoriteCountry }) => {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    history?.push('/login');
  }

  return (
    <>
      <div className="mySavedPlaces-cointainer">
        <h1>My Saved Places</h1>
        <SearchInput className="mySavedPlaces-cointainer__searchInput" />
        <div className="countriesSaved-cointainer">
          <ul>
            { favoriteCountry.map((element) => (
              <Link to={`/country/${element}`}>
                <li>{element}</li>
              </Link>
            ))}
            {' '}
          </ul>
        </div>
      </div>
    </>
  );
};

MySavedPlaces.propTypes = {
  favoriteCountry: PropTypes.string.isRequired
};

function mapStateToProps(store) {
  return {
    favoriteCountry: store.favoriteCountry
  };
}

export default connect(mapStateToProps)(MySavedPlaces);
