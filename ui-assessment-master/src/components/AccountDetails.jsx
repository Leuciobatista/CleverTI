import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Details = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  color: #555;
`;

const AccountDetails = ({ details }) => (
  <Details>
    <div>Balance: ${details.balance.toFixed(2)}</div>
    <div>Account Number: {details.accountNumber}</div>
  </Details>
);

AccountDetails.propTypes = {
  details: PropTypes.shape({
    balance: PropTypes.number.isRequired,
    accountNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default AccountDetails;
