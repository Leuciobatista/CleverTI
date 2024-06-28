import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const AccountHeader = ({ name }) => (
  <Header>
    {name}
  </Header>
);

AccountHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AccountHeader;
