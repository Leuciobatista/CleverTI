import React from 'react';
import { render } from '@testing-library/react';
import TransactionItem from '../TransactionItem';

test('renders transaction item', () => {
  const transaction = { date: '2023-01-01', amount: -100.00, description: 'Grocery Shopping' };
  const { getByText } = render(<TransactionItem transaction={transaction} />);
  expect(getByText(/date: 2023-01-01/i)).toBeInTheDocument();
  expect(getByText(/amount: \$-100\.00/i)).toBeInTheDocument();
  expect(getByText(/description: grocery shopping/i)).toBeInTheDocument();
});
