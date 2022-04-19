import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders asked message', () => {
  render(<App />);
  const message = screen.getByText(/Banco Galicia/i);
  expect(message).toBeInTheDocument();
});

test('renders asked image', () => {
  render(<App />);
  const image = screen.getByAltText('asked_image');
  expect(image).toBeInTheDocument();
});
