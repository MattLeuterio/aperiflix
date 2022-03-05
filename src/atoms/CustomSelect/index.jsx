import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Select from 'react-select';
import { SelectContainer } from './style';
import theme from '../../ui/theme';
import { MediaQueryInterface } from '../../interface/mediaQueries';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import { getLabelValue } from '../../utils/common';

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width
  }),

  control: (_, { selectProps: { width } }) => ({
    width: `${width}`,
    display: 'flex',
    border: `1px solid ${theme.colors.custom.blue}`,
    borderRadius: '10px',
    height: '30px'
  }),

  indicatorsContainer: (provided, state) => {
    const color = theme.colors.custom.blue;
    const cursor = 'pointer';

    return { ...provided, color, cursor };
  },

  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none'
  }),

  singleValue: (provided, state) => {
    const fontStyle = 'italic';
    const fontSize = '14px';

    return { ...provided, fontStyle, fontSize };
  }
};

const CustomSelect = ({
  options = [], onChange, onBlur, selected, value, styles = customStyles, labels
}) => {
  return (
    <Select
      styles={styles}
      value={value}
      onChange={onChange}
      options={options}
      placeholder={getLabelValue('select_placeholder_default', labels)}
    />
  );
};

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.array,
  selected: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default connect(
  state => ({
    labels: state.app.selectedLabel
  }),
  dispatch => ({
  })
)(withMediaQueries(CustomSelect));
