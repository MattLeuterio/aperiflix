import React from 'react';
import PropTypes from 'prop-types';

import Arial from '../../ui/typography/arial';
import {
  ButtonIconTextContainer
} from './style';
import Icon from '../Icon';

const ButtonIconText = ({
  btnText, disabled, active, onClick, icon
}) => (
  <ButtonIconTextContainer disabled={disabled} onClick={onClick} active={active}>
    <Icon type={icon} size={30} disabled={disabled} />
    <Arial type="label">{btnText}</Arial>
  </ButtonIconTextContainer>
);

ButtonIconText.TYPE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

ButtonIconText.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  icon: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

ButtonIconText.defaultProps = {
  disabled: false,
  active: false
};

export default ButtonIconText;
