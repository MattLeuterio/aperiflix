import React from 'react';
import PropTypes from 'prop-types';

import {
  AdminCtaContainer, IconContainer
} from './style';
import theme from '../../ui/theme';

import Icon from '../Icon';
import Roboto from '../../ui/typography/inter';

const AdminCta = ({
  onClick, btnType, height, width, selected, disabled
}) => (
  <AdminCtaContainer
    onClick={onClick}
    btnType={btnType}
    height={height}
    width={width}
    selected={selected}
    disabled={disabled}
  >
    {btnType === 'publisher' ? (
      <Roboto>Publishers</Roboto>
    ) : (
      <IconContainer>
        <Icon type={`icon-${btnType}`} size={20} color={theme.colors.primary.white} />
      </IconContainer>
    )}

  </AdminCtaContainer>
);

AdminCta.TYPE = {
  PUBLISHER: 'publisher',
  EDIT: 'edit',
  SWITCH: 'switch',
  DELETE: 'delete'
};

AdminCta.propTypes = {
  onClick: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.string,
  btnType: PropTypes.oneOf(Object.values(AdminCta.TYPE))
};

AdminCta.defaultProps = {
  btnType: AdminCta.TYPE.PUBLISHER
};

export default AdminCta;
