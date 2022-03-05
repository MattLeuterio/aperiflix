import React from 'react';
import PropTypes from 'prop-types';
import { Container, HamburgerIcon } from './style';

const HamburgerMenu = ({ open, onClick }) => (
  <Container onClick={onClick}>
    <HamburgerIcon open={open} />
  </Container>
);

HamburgerMenu.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool
};

export default HamburgerMenu;
