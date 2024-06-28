import React from 'react';
import { render } from '@testing-library/react';
import AccountDetails from '../components/AccountDetails';

test('renders account details', () => {
  const details = { balance: 1234.56, accountNumber: '12345678' };
  const { getByText } = render(<AccountDetails details={details} />);
  expect(getByText(/balance: \$1234\.56/i)).toBeInTheDocument();
  expect(getByText(/account number: 12345678/i)).toBeInTheDocument();
});
