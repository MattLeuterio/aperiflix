import React from 'react';
import PropTypes from 'prop-types';

import Arial from '../../ui/typography/arial';
import {
  ButtonContainer, IconContainer
} from './style';
import theme from '../../ui/theme';

import Icon from '../Icon';

const Button = ({
  btnText, disabled, onClick, btnType, hasIcon, height, width, logo, selected
}) => (
  <ButtonContainer
    disabled={disabled}
    onClick={onClick}
    btnType={btnType}
    hasIcon={hasIcon}
    height={height}
    width={width}
    selected={selected}
  >
    {btnType === 'platform' && logo ? (
      <img src={logo} alt="" />
    ) : (
      <>
        <Arial type="boldLabel">{btnText}</Arial>
        {hasIcon
      && (
      <IconContainer height={height}>
        <Icon type="icon-tag" size={30} color={theme.colors.primary.white} />
      </IconContainer>
      )}
      </>
    )}


  </ButtonContainer>
);

Button.TYPE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  PLATFORM: 'platform'
};

Button.propTypes = {
  disabled: PropTypes.bool,
  hasIcon: PropTypes.bool,
  onClick: PropTypes.func,
  btnText: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.string,
  btnType: PropTypes.oneOf(Object.values(Button.TYPE))
};

Button.defaultProps = {
  disabled: false,
  btnType: Button.TYPE.PRIMARY
};

export default Button;
