import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RefreshButton } from './RefreshButton';
import { store } from '../../app/store';
import { JSX } from 'react/jsx-runtime';

// Mocking the Redux store
const renderWithRedux = (
  component: React.ReactElement<JSX.IntrinsicElements>
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
};

describe('RefreshButton', () => {
  test('renders button correctly', () => {
    renderWithRedux(<RefreshButton />);
    expect(screen.getByRole('button', { name: /refresh/i })).toBeInTheDocument();
  });
});
