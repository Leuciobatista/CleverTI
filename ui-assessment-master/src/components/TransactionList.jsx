import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransactionItem from './TransactionItem';

const List = styled.div`
  margin-top: 20px;
`;

const TransactionList = ({ transactions }) => (
  <List>
    {transactions && transactions.map(transaction => (
      <TransactionItem key={transaction.id} transaction={transaction} />
    ))}
  </List>
);

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionList;
