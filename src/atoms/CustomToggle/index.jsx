import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import { CustomToggleContainer } from './style';

import Arial from '../../ui/typography/arial';
import theme from '../../ui/theme';

const CustomToggle = ({
  checked, onChange,
  disabled, label, value
}) => {
  const [active, setActive] = useState(checked);

  useEffect(() => {
    setActive(checked);
  }, [checked]);

  const handleOnchange = ({ currentTarget: { value: newValue, checked: isChecked } }) => {
    if (isChecked && onChange) onChange(newValue);
    else if (!isChecked && onChange) onChange(null);
  };

  return (
    <CustomToggleContainer>
      <Toggle
        onChange={handleOnchange}
        disabled={disabled}
        defaultChecked={active}
        value={value}
        icons={false}
      />
      {label && <Arial htmlAttribute="span" type="label" configuration={{ color: !disabled ? theme.colors.custom.lightgray : theme.colors.primary.lightgray }}>{label}</Arial>}
    </CustomToggleContainer>
  );
};
CustomToggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.instanceOf([PropTypes.string, PropTypes.bool])
};

export default CustomToggle;
