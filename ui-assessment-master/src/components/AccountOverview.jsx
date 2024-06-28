import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AccountHeader from './AccountHeader';
import AccountDetails from './AccountDetails';
import TransactionList from './TransactionList';

const Container = styled.div`
  padding: 20px;
`;

const AccountOverview = ({ data }) => (
  <Container>
    <AccountHeader name={data.name} />
    <AccountDetails details={data.details} />
    <TransactionList transactions={data.transactions} />
  </Container>
);

AccountOverview.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
    transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default AccountOverview;
