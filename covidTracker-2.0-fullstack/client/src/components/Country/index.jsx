import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import { loadCountry, loadVaccinesByCountry } from '../../redux/actions/actionCreators';
import './style.scss';
import FavoriteButton from '../FavoriteButton';
import HistoryGraph from '../HistoryGraph';

function Country({ dispatch, countryData, vaccineByCountryData }) {
  const { country } = useParams();
  useEffect(() => { dispatch(loadCountry(country)); }, [country]);
  useEffect(() => { dispatch(loadVaccinesByCountry(country)); }, [country]);

  const myInterestValuesArray = ['confirmed', 'recovered', 'deaths', 'population', 'updated'];
  const myInterestVaccinesValuesArray = ['administered', 'people_vaccinated', 'people_partially_vaccinated'];
  const myCountryStats = [];
  const myCountryVaccineStats = [];

  function getStatsCountryValues() {
    Object.entries(countryData).forEach(([element, value]) => {
      if (myInterestValuesArray.find((keys) => keys === element)) {
        myCountryStats.push([element, value]);
      }
      return myCountryStats;
    });
  }
  function getVaccinesCountryValues() {
    Object.entries(vaccineByCountryData).forEach(([element, value]) => {
      if (myInterestVaccinesValuesArray.find((keys) => keys === element)) {
        myCountryVaccineStats.push([element, value]);
      }
      return myCountryVaccineStats;
    });
  }

  getStatsCountryValues();
  getVaccinesCountryValues();
  function printStats(array) {
    return array.map(([element, value]) => (
      <li key={`${value}`}>
        {element.toUpperCase()}
        :
        {' '}
        {Number(value).toLocaleString()}
      </li>
    ));
  }

  return (
    <>
      <section className="country-section">
        <div className="country-section__data">
          <div className="country-container">
            <h1>{country}</h1>
            <FavoriteButton />
            <ul>
              {printStats(myCountryStats)}
            </ul>
          </div>
          <div className="vacciones-container">
            <h3>
              Vaccines
            </h3>
            <ul>
              {printStats(myCountryVaccineStats)}
            </ul>
          </div>
        </div>
        <div className="graph-container">
          <h3>Historical evolution chart of the confirmed cases</h3>
          <HistoryGraph />
        </div>
      </section>
    </>
  );
}

Country.propTypes = {
  dispatch: PropTypes.func.isRequired,
  countryData: PropTypes.shape({}).isRequired,
  vaccineByCountryData: PropTypes.shape({}).isRequired
};

function mapStateToProps(store) {
  return {
    countryData: store.countryData,
    vaccineByCountryData: store.vaccineByCountryData
  };
}

export default connect(mapStateToProps)(Country);
