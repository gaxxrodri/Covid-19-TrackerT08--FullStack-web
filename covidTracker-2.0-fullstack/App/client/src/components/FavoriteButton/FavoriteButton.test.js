/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import FavoriteButton from './index';
import { addCountryToFav } from '../../redux/actions/actionCreators';
import { render, fireEvent } from '../../utils/test-utils';

jest.mock('./../../redux/actions/actionCreators');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ country: 'France' })
}));

describe('FavoriteButton Component', () => {
  test('should dispatch addCountryToFav action', () => {
    addCountryToFav.mockReturnValue(jest.fn);

    const { container } = render(<FavoriteButton />, {
      initialState: {
        favoriteCountry: ['France']
      }
    });
    const btn = container.querySelector('button');
    fireEvent.click(btn);
    expect(addCountryToFav).toHaveBeenCalled();
  });
});
