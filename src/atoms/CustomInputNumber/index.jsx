import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  InputNumber,
  InputContainer,
  InputNumberContainer,
  IconContainer
} from './style';

import Icon from '../Icon';

const CustomInputNumber = ({
  value: val,
  min,
  max,
  onChange,
  disabled,
  onFocus,
  onBlur
}) => {
  const updateValue = value => Math.max(Math.min(Number(value), max), min);
  const [value, setValue] = useState(updateValue(val));

  const handleOnChange = newValue => setValue(updateValue(newValue));

  const handleOnBlur = () => {
    if (onBlur) onBlur();
  };

  const handleOnFocus = () => {
    if (onFocus) onFocus();
  };
  useEffect(() => {
    handleOnChange(val);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val]);

  useEffect(() => {
    if (onChange) onChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const increase = () => handleOnChange(value + 1);
  const decrease = () => handleOnChange(value - 1);

  return (
    <InputNumberContainer>
      <IconContainer>
        <Icon
          type="icon-meno"
          disabled={disabled || value <= min}
          size={30}
          onClick={decrease}
        />
      </IconContainer>
      <InputContainer>
        <InputNumber
          disabled={disabled}
          min={min}
          max={max}
          value={value}
          onChange={({ currentTarget: { value: v } = {} }) => handleOnChange(v)}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
        />
      </InputContainer>
      <IconContainer>
        <Icon
          type="icon-piu"
          disabled={disabled || value >= max}
          size={30}
          onClick={increase}
        />
      </IconContainer>
    </InputNumberContainer>
  );
};

CustomInputNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};

CustomInputNumber.defaultProps = {
  value: 0,
  min: 0,
  max: 99
};

export default CustomInputNumber;
