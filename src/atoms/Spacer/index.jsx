import React from 'react';
import PropTypes from 'prop-types';

import { SpacerContainer } from './style';

const Spacer = ({
  margin, padding, display, children
}) => (
  <SpacerContainer margin={margin} padding={padding} display={display}>{children}</SpacerContainer>
);


Spacer.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
  display: PropTypes.oneOf(['flex', 'block', 'inline-block'])
};

Spacer.defaultProps = {
  display: 'flex'
};


export default Spacer;
