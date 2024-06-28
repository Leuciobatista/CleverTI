import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #ccc;
  text-align: left;
  margin: 0 20px;
  color: #555;
`;

const TransactionDate = styled.div`
  font-size: 16px;
  color: #888;
`;

const TransactionAmount = styled.div`
  font-size: 16px;
  color: ${props => (props.amount < 0 ? 'red' : 'green')};
`;

const TransactionDescription = styled.div`
  font-size: 16px;
  color: #555;
`;

const TransactionItem = ({ transaction }) => (
  <Item>
    <TransactionDate>Date: {transaction.date}</TransactionDate>
    <TransactionAmount amount={transaction.amount}>Amount: ${transaction.amount.toFixed(2)}</TransactionAmount>
    <TransactionDescription>Description: {transaction.description}</TransactionDescription>
  </Item>
);

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionItem;
