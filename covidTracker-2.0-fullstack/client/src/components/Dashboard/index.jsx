import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadGlobalData } from '../../redux/actions/actionCreators';
import './style.scss';
import Chart from '../Map/index';

const Dashboard = ({ globalData, dispatch }) => {
  useEffect(() => { dispatch(loadGlobalData()); }, []);
  return (
    <>
      <section className="dashboard">
        <div className="container">
          <div className="text-container">
            <p>Powered by WHO</p>
            <h1>
              Tracking the virus worldwide
            </h1>
            <h3>
              Get the lastest updated info about the pandemic
              and vaccination by continent, country and region.
            </h3>
            <button className="text-container__button" type="button">
              <Link className="main-button" to="/global">Find a region</Link>
            </button>
          </div>
          <div className="chart-container">
            <Chart />
            <div className="chart-container__data">
              <ul>
                { globalData
        && globalData.map(([element, value]) => (
          <li className="Highlighted-data-card">
            {element.toUpperCase()}
            {'  '}
            {Number(value).toLocaleString()}
          </li>
        ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Dashboard.propTypes = {
  globalData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ globalData }) => ({ globalData: Object.entries(globalData) });

export default connect(mapStateToProps)(Dashboard);
