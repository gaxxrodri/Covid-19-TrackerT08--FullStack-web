import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadGlobalData, loadVaccinesByContinent } from '../../redux/actions/actionCreators';
import './style.scss';

const Global = ({ globalData, vaccinesByContinent, dispatch }) => {
  useEffect(() => {
    dispatch(loadGlobalData());
  }, []);
  useEffect(() => {
    dispatch(loadVaccinesByContinent());
  }, []);

  const infoByContinent = Object.values(vaccinesByContinent);

  return (
    <>
      <section className="global">
        <div className="container">
          <div className="title">
            <h1>Global</h1>
            <h3>Affected countries: 220</h3>
          </div>
          <section className="mainData">
            <ul className="globalCards">
              { globalData
        && globalData.map(([element, value]) => (
          <li key={element} className="total">
            <p className="identifier">{element.toUpperCase()}</p>
            <p className="number">{Number(value).toLocaleString()}</p>
          </li>
        ))}
            </ul>
          </section>
          <section className="vaccinatedByContinent">
            <h2>Vaccinated by continents</h2>
            <ul className="continent-cards">
              { infoByContinent
        && infoByContinent.map((country) => (

          <li key={country} className="continent-card">
            <p className="continent-card__name">{country[0].toUpperCase()}</p>
            <p className="continent-card__entry">
              Vaccinated:
              <span className="continent-card__data">
                {' '}
                {Number(country[1]).toLocaleString()}
              </span>
            </p>
            <p className="continent-card__entry">
              Partially Vaccinated:
              <span className="continent-card__data">
                {' '}
                {Number(country[2]).toLocaleString()}
              </span>
            </p>
            <p className="continent-card__entry">
              Updated:
              {' '}
              <span className="continent-card__data">
                {' '}
                {/* {country[3].slice(0, 10)} //no se que hace esto, preguntar */}
              </span>
            </p>
          </li>
        ))}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
};

Global.propTypes = {
  globalData: PropTypes.shape([]).isRequired,
  vaccinesByContinent: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ globalData, vaccinesByContinent }) => (
  {
    globalData: Object.entries(globalData),
    vaccinesByContinent
  }
);

export default connect(mapStateToProps)(Global);
