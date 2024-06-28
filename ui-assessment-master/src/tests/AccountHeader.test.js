import React from 'react';
import { render } from '@testing-library/react';
import AccountHeader from '../components/AccountHeader';

test('renders account name', () => {
  const { getByText } = render(<AccountHeader name="John Smith" />);
  expect(getByText(/john smith/i)).toBeInTheDocument();
});
