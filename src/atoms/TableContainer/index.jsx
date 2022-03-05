import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';


const Container = styled.div`
  background-color: ${props => props.theme.colors.primary.white};
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  
  header {
    margin-top: -10px;
  }
`;

const TableContainer = ({ children }) => (
  <Container>{children}</Container>
);


TableContainer.propTypes = {
  children: PropTypes.node
};


export default TableContainer;
