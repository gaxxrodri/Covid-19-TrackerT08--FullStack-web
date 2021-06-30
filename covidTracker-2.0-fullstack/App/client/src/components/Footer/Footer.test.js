/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Footer from './index';
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

describe('Footer Component', () => {
  test('should contain World Health Organization', () => {
    render(<Footer />, container);

    expect(screen.getByText(/World Health Organization/i)).toBeInTheDocument();
  });
});
