import React from 'react';
import { render } from '@testing-library/react';
import AccountOverview from '../components/AccountOverview';

test('renders account overview', () => {
  const data = {
    name: 'John Smith',
    details: {
      balance: 1234.56,
      accountNumber: '12345678',
    },
    transactions: [
      { id: 1, date: '2023-01-01', amount: -100.00, description: 'Grocery Shopping' },
      { id: 2, date: '2023-01-02', amount: -50.00, description: 'Gas Station' },
    ],
  };

  const { getByText } = render(<AccountOverview data={data} />);
  
  expect(getByText(/john smith/i)).toBeInTheDocument();
  expect(getByText(/balance: \$1234\.56/i)).toBeInTheDocument();
  expect(getByText(/account number: 12345678/i)).toBeInTheDocument();
  expect(getByText(/date: 2023-01-01/i)).toBeInTheDocument();
  expect(getByText(/amount: \$-100\.00/i)).toBeInTheDocument();
  expect(getByText(/description: grocery shopping/i)).toBeInTheDocument();
  expect(getByText(/date: 2023-01-02/i)).toBeInTheDocument();
  expect(getByText(/amount: \$-50\.00/i)).toBeInTheDocument();
  expect(getByText(/description: gas station/i)).toBeInTheDocument();
});
