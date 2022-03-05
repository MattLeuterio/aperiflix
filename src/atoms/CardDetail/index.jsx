import React from 'react';
import PropTypes from 'prop-types';

import { Detail, Label, Value } from './style';
import Arial from '../../ui/typography/arial';
import theme from '../../ui/theme';

const CardDetail = ({
  label, value, bold
}) => (
  <Detail>
    <Label><Arial type="label" htmlAttribute="span" configuration={{ color: theme.colors.primary.lightblack }}>{label}</Arial></Label>
    <Value><Arial type="label" htmlAttribute="span" configuration={{ fontWeight: bold ? 700 : 400 }}>{value || '-'}</Arial></Value>
  </Detail>
);

CardDetail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  bold: PropTypes.bool
};

export default CardDetail;
