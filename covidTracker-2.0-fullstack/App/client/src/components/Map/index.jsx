import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Chart } from 'react-google-charts';
import { loadVaccinesContinentData } from '../../redux/actions/actionCreators';
import './style.scss';

const Map = ({ vaccinesContinentData, dispatch }) => {
  useEffect(() => { dispatch(loadVaccinesContinentData()); }, []);
  return (
    <>
      <div className="worldwide-map">
        <Chart
          chartType="GeoChart"
          data={vaccinesContinentData}
          options={{
            resolution: 'continents',
            colors: ['#CCDBDC', '#007EA7'],
            backgroundColor: 'transparent',
            legend: 'none'
          }}
          mapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </>
  );
};

Map.propTypes = {
  vaccinesContinentData: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ vaccinesContinentData }) => ({
  vaccinesContinentData
});

export default connect(mapStateToProps)(Map);
