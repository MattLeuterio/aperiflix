import React from 'react';
import PropTypes from 'prop-types';

import { LogoContainer, LogoImg } from './style';
import LogoBase from '../../ui/assets/img/logo-aperiflix.png';

const Logo = ({
  size, onClick
}) => (
  <LogoContainer size={size} onClick={onClick}>
    <LogoImg
      src={LogoBase}
      srcSet={`${LogoBase} 1x, ${LogoBase} 2x, ${LogoBase} 3x`}
    />
  </LogoContainer>
);

Logo.SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

Logo.propTypes = {
  size: PropTypes.oneOf(Object.values(Logo.SIZE)),
  onClick: PropTypes.func
};

Logo.defaultProps = {
  size: Logo.SIZE.MEDIUM
};

export default Logo;
