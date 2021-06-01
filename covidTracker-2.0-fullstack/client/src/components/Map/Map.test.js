/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Chart } from 'react-google-charts';
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

describe('Map Component', () => {
  test('should contain Confirmed', () => {
    render(<Chart />, container);

    expect(screen.getByText(/Confirmed/i)).toBeInTheDocument();
  });
});
