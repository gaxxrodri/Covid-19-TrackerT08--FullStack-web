/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Global from './index';
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
  test('should contain Global', () => {
    render(<Global />, container);

    expect(screen.getByText(/Global/i)).toBeInTheDocument();
  });
});
