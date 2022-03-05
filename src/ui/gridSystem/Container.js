import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerS = styled.div``;

const Container = ({ children, className, style }) => (
  <ContainerS className={`container container-fluid ${className}`} style={style}>{children}</ContainerS>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Container.defaultProps = {
  className: ''
};

export default Container;
