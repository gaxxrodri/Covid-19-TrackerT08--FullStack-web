/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '../../utils/test-utils';
import Header from './index';

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

jest.mock('@auth0/auth0-react');

describe('Header Component', () => {
  test('should contain Login when the user is authenticated', () => {
    useAuth0.mockImplementation(() => ({ isAuthenticated: true }));
    render(<Header />,
      container);
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });
});

describe('Header Component', () => {
  test('should contain Login when the user is not authenticated', () => {
    useAuth0.mockImplementation(() => ({ isAuthenticated: false }));
    render(<Header />,
      container);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
