/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Country from './index';
import { loadCountry, loadCountryHistory, loadVaccinesByCountry } from '../../redux/actions/actionCreators';
import { render } from '../../utils/test-utils';

jest.mock('./../../redux/actions/actionCreators');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ country: 'France' })
}));

describe('Country component ', () => {
  test('should dispatch loadCountry action', () => {
    loadCountry.mockReturnValue(jest.fn);
    loadCountryHistory.mockReturnValue(jest.fn);
    loadVaccinesByCountry.mockReturnValue(jest.fn);

    render(<Country />, {
      initialState: {
        countryData: {}
      }
    });

    expect(loadCountry).toHaveBeenCalled();
  });
});
