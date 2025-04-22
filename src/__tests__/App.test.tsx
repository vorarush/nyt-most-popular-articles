import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders heading', () => {
  render(<App />);
  expect(screen.getByText(/NY Times Most Popular/i)).toBeInTheDocument();
});