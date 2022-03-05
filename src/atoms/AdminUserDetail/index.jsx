import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  AdminDetailContainer
} from './style';
import Arial from '../../ui/typography/arial';
import { getRandomNumber } from '../../utils/common';
import Roboto from '../../ui/typography/inter';
import theme from '../../ui/theme';

const AdminUserDetail = ({
  label, value, isPublisher = false, type = 'labelCardUser', pubCount, role, isInfoRole
}) => (
  <AdminDetailContainer isPublisher={isPublisher}>
    <Roboto type={type} configuration={{ fontSize: 12 }}>{label}</Roboto>
    <Roboto type="medium" configuration={{ fontSize: 12, color: label === 'Username' ? theme.colors.custom.blue : 'inherit' }}>
      {value}{' '}
      {(role !== 'super_admin' && role !== 'admin' && isInfoRole) && (
        <Roboto htmlAttribute="span" type="medium" configuration={{ fontSize: 12, color: label === 'Username' ? theme.colors.custom.blue : 'inherit' }}>(<span style={{ color: '#4f9eff' }}>{pubCount} pub.</span>)</Roboto>
      )}
    </Roboto>
  </AdminDetailContainer>
);

AdminUserDetail.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string
};

export default AdminUserDetail;
