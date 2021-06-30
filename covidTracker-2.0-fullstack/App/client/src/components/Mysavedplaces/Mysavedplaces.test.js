/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import MySavedPlaces from './index';
import { render, screen } from '../../utils/test-utils';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Header Component', () => {
  test('should contain My Saved Places', () => {
    render(<MySavedPlaces />, container);

    expect(screen.getByText(/My Saved Places/i)).toBeInTheDocument();
  });
});
